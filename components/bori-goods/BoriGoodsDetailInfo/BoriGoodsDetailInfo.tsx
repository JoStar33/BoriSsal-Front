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
import SuccessDialog from '@/components/dialogs/SuccessDialog/SuccessDialog';
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
  const [validateDialog, setValidateDialog] = useState<boolean>(false);
  const [successDialog, setSuccessDialog] = useState<boolean>(false);
  const { user } = useSelector((state: RootState) => state.userStore);
  const likeGoodsMutation = useLikeGoodsMutation(goods._id);
  const handleLikeGoods = () => {
    if (!user.id) {
      validateText.current = "로그인 이후에 누를 수 있어요!";
      return setValidateDialog(true);
    }
    user.user_bori_goods_like.find((likeGoods) => likeGoods === goods._id)
      ? goods.bori_goods_like--
      : goods.bori_goods_like++;
    dispatch(setGoodsLike(goods._id));
    likeGoodsMutation.mutate();
  };
  return (
    <>
      {
        validateDialog && (
          <ValidateDialog
            text={validateText.current}
            setDialog={setValidateDialog}
          ></ValidateDialog>
        )
      }
      {
        successDialog && (
          <SuccessDialog
            text='장바구니에 굿즈를 담으셨어요!'
            setDialog={setSuccessDialog}
          ></SuccessDialog>
        )
      }
      <div className={styles.bori_goods_detail_info_container}>
        <div className={styles.goods_image_container}>
          <figure
            style={{ position: "relative", width: "48vw", height: "48vw" }}
          >
            <Image
              style={{border: '2px solid black'}}
              fill
              src={`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}${goods.bori_goods_image}`}
              alt={goods.bori_goods_name}
            ></Image>
          </figure>
          <BoriGoodsDetailController 
            validateText={validateText}
            setValidateDialog={setValidateDialog}
            setSuccessDialog={setSuccessDialog}
            goods={goods}/>
        </div>
        <div className={styles.goods_info}>
          <p>제품 정보: {goods.bori_goods_name}</p>
          <p className={styles.goods_category}>
            카테고리: #{category.category_name}
          </p>
          <p className={styles.goods_like_container}>
            좋아요:
            <div>
              <button onClick={handleLikeGoods}
                role='like'>
                <AiFillHeart
                  color={
                    user.user_bori_goods_like.find(
                      (likeGoods) => likeGoods === goods._id
                    )
                      ? "red"
                      : "black"
                  }
                  size={25}
                ></AiFillHeart>
              </button>
              {goods.bori_goods_like}
            </div>
          </p>
          <p>상품가격: {goods.bori_goods_price}</p>
        </div>
      </div>
    </>
  );
};

export default BoriGoodsDetailInfo;