import React, { useRef, useState } from "react";
import { errorMessage } from "@/apis/error/customError";
import { IBoriGoods, ICategory } from "@/types/boriGoods";
import { AxiosError } from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { AiFillHeart } from "react-icons/ai";
import { setGoodsLike } from "@/store/user";
import { RootState } from "@/store";
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getGoods } from "@/apis/bori-goods/boriGoods";
import { useLikeGoodsMutation } from "@/hooks/bori-goods/useLikeGoodsMutation/useLikeGoodsMutation";
import { useBoriGoodsReplyQuery } from "@/hooks/bori-goods/useBoriGoodsReplyQuery/useBoriGoodsReplyQuery";
import ValidateDialog from "@/components/dialogs/ValidateDialog/ValidateDialog";
import styles from "./bori_goods_detail.module.scss";
import Image from "next/image";
import ReplyViewer from "@/components/reply/ReplyViewer/ReplyViewer";

interface IProps {
  goods: IBoriGoods;
  category: ICategory;
  categoryErrorMessage: string;
  goodsErrorMessage: string;
}

const BoriGoodsDetail = ({
  goods,
  category,
  categoryErrorMessage,
  goodsErrorMessage,
}: IProps) => {
  const dispatch = useDispatch();
  const [dialog, setDialog] = useState<boolean>(false);
  const { user } = useSelector((state: RootState) => state.userStore);
  const { data } = useBoriGoodsReplyQuery(goods._id);
  const validateText = useRef<string>("");
  const likeGoodsMutation = useLikeGoodsMutation(
    user.id,
    goods._id,
    user.user_product_like.find((likeGoods) => likeGoods === goods._id)
  );
  const handleLikeGoods = () => {
    if (!user.id) {
      validateText.current = "로그인 이후에 누를 수 있어요!";
      setDialog(true);
      return;
    }
    user.user_product_like.find((likeGoods) => likeGoods === goods._id)
      ? goods.product_like--
      : goods.product_like++;
    dispatch(setGoodsLike(goods._id));
    likeGoodsMutation.mutate();
  };
  return (
    <div>
      {dialog && (
        <ValidateDialog
          text={validateText.current}
          setDialog={setDialog}
        ></ValidateDialog>
      )}
      <div className={styles.bori_goods_info_container}>
        <div className={styles.goods_image_container}>
          <figure
            style={{ position: "relative", width: "48vw", height: "48vw" }}
          >
            <Image
              fill
              src={`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}${goods.product_image}`}
              alt={goods.product_name}
            ></Image>
          </figure>
          <div className={styles.button_container}>
            <button className={styles.cart_button}>
              <BsFillCartFill size={40}></BsFillCartFill>장바구니 담기
            </button>
            <button className={styles.order_button}>주문하기</button>
          </div>
        </div>
        <div className={styles.goods_info}>
          <p>제품 정보: {goods.product_name}</p>
          <p className={styles.goods_category}>
            카테고리: #{category.category_name}
          </p>
          <p className={styles.goods_like_container}>
            좋아요:
            <div>
              <button onClick={handleLikeGoods}>
                <AiFillHeart
                  color={
                    user.user_product_like.find(
                      (likeGoods) => likeGoods === goods._id
                    )
                      ? "red"
                      : "black"
                  }
                  size={25}
                ></AiFillHeart>
              </button>
              {goods.product_like}
            </div>
          </p>
          <p>상품가격: {goods.product_price}</p>
        </div>
      </div>
      <ReplyViewer goods_id={goods._id} reply={data?.data}></ReplyViewer>
    </div>
  );
};

export default BoriGoodsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  let goodsData: IBoriGoods[] = [];
  await getGoods().then((res) => {
    goodsData = res.data;
  });
  const paths = goodsData.map((goods) => ({
    params: { boriGoodsDetail: goods.product_name },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let goodsData: IBoriGoods[] = [];
  let categoryData: ICategory[] = [];
  let categoryErrorMessage = null;
  let goodsErrorMessage = null;
  await getGoods()
    .then((res) => {
      goodsData = res.data;
    })
    .catch((error: AxiosError) => {
      goodsErrorMessage = errorMessage(error);
    });
  await getCategory()
    .then((res) => {
      categoryData = res.data;
    })
    .catch((error: AxiosError) => {
      categoryErrorMessage = errorMessage(error);
    });
  const goods = goodsData.find(
    (goods) => goods.product_name === params?.boriGoodsDetail
  );
  const category = categoryData.find(
    (category) => category._id === goods?.category_id
  );
  return {
    props: {
      goods,
      category,
      categoryErrorMessage,
      goodsErrorMessage,
    },
  };
};
