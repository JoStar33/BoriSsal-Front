import React, { useRef, useState } from 'react';
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { IBoriGoods, ICategory } from "@/types/boriGoods";
import { useLikeGoodsMutation } from '@/hooks/bori-goods/useLikeGoodsMutation/useLikeGoodsMutation';
import { setGoodsLike } from '@/store/user';
import Image from "next/image";
import styles from './bori_goods_detail_info.module.scss';
import ValidateDialog from '@/components/dialogs/ValidateDialog/ValidateDialog';
import BoriGoodsDetailController from '../BoriGoodsDetailController/BoriGoodsDetailController';
interface IProps {
  goods: IBoriGoods;
  category: ICategory;
}

const BoriGoodsDetailInfo = ({
  goods,
  category
}:IProps) => {
  const dispatch = useDispatch();
  const validateText = useRef<string>("");
  const [dialog, setDialog] = useState<boolean>(false);
  const { user } = useSelector((state: RootState) => state.userStore);
  const likeGoodsMutation = useLikeGoodsMutation(
    user.id,
    goods._id,
    user.user_product_like.find((likeGoods) => likeGoods === goods._id)
  );
  const handleLikeGoods = () => {
    if (!user.id) {
      validateText.current = "로그인 이후에 누를 수 있어요!";
      return setDialog(true);
    }
    user.user_product_like.find((likeGoods) => likeGoods === goods._id)
      ? goods.product_like--
      : goods.product_like++;
    dispatch(setGoodsLike(goods._id));
    likeGoodsMutation.mutate();
  };
  return (
    <>
      {
        dialog && (
          <ValidateDialog
            text={validateText.current}
            setDialog={setDialog}
          ></ValidateDialog>
        )
      }
      <div className={styles.bori_goods_detail_info_container}>
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
          <BoriGoodsDetailController/>
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
    </>
  );
};

export default BoriGoodsDetailInfo;