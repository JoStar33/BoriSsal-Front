import { errorMessage } from '@/apis/error/customError';
import { useCartMutation } from '@/hooks/user/useCartMutation/useCartMutation';
import { useCartStore } from '@/store/cart';
import { usePageStore } from '@/store/page';
import { IBoriGoods } from '@/types/boriGoods';
import { IUser } from '@/types/user';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { BsFillCartFill } from "react-icons/bs";
import styles from './bori_goods_detail_controller.module.scss';

interface IProps {
  validateText: React.MutableRefObject<string>;
  setValidateDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccessDialog: React.Dispatch<React.SetStateAction<boolean>>;
  goods: IBoriGoods;
  user: IUser;
}

const BoriGoodsDetailController = ({user, goods, validateText, setValidateDialog, setSuccessDialog}: IProps) => {
  const { setPageState } = usePageStore();
  const router = useRouter();
  const { setCart } = useCartStore();
  const { mutate, isError, isSuccess, error } = useCartMutation(
    {
      bori_goods_id: goods._id,
      bori_goods_name: goods.bori_goods_name,
      bori_goods_image: goods.bori_goods_image,
      bori_goods_count: 1,
      bori_goods_price: goods.bori_goods_price
    }
  );
  useEffect(() => {
    if (isSuccess) {
      setSuccessDialog(true);
    };
  }, [isSuccess, setSuccessDialog])
  useEffect(() => {
    if (isError) {
      setValidateDialog(true);
      validateText.current = errorMessage(error as AxiosError);
    };
  }, [error, isError, setValidateDialog, validateText]);
  const handleCart = () => {
    if (user.email.length < 2) {
      setValidateDialog(true);
      validateText.current = '로그인 후 이용 가능합니다.';
      return;
    }
    mutate();
  };
  const handleOrder = () => {
    if (user.email.length < 2) {
      setValidateDialog(true);
      validateText.current = '로그인 후 이용 가능합니다.';
      return;
    }
    setCart([{
      bori_goods_id: goods._id,
      bori_goods_name: goods.bori_goods_name,
      bori_goods_image: goods.bori_goods_image,
      bori_goods_count: 1,
      bori_goods_price: goods.bori_goods_price
    }]);
    setPageState('order');
    router.push('/order');
  }
  return (
    <div className={styles.button_container}>
      <button onClick={handleCart} className={styles.cart_button} aria-label="장바구니 담기">
        <BsFillCartFill color='black' style={{width: "3vw", height: "3vw"}}></BsFillCartFill>장바구니 담기
      </button>
      <button onClick={handleOrder} className={styles.order_button} aria-label="주문하기">주문하기</button>
    </div>
  );
};

export default BoriGoodsDetailController;