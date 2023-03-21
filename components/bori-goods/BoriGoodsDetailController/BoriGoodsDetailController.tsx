import { errorMessage } from '@/apis/error/customError';
import { useCartMutation } from '@/hooks/user/useCartMutation/useCartMutation';
import { RootState } from '@/store';
import { setCartState } from '@/store/cart';
import { IBoriGoods } from '@/types/boriGoods';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import styles from './bori_goods_detail_controller.module.scss';

interface IProps {
  validateText: React.MutableRefObject<string>;
  setValidateDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccessDialog: React.Dispatch<React.SetStateAction<boolean>>;
  goods: IBoriGoods;
}

const BoriGoodsDetailController = ({goods, validateText, setValidateDialog, setSuccessDialog}: IProps) => {
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.userStore);
  const { mutate, isError, isSuccess, error } = useCartMutation(
    user.id,
    {
      product_id: goods._id,
      product_name: goods.product_name,
      product_image: goods.product_image,
      product_stock: goods.product_stock,
      product_price: goods.product_price
    }
  )
  const dispatch = useDispatch();
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
    dispatch(setCartState([{
      product_id: goods._id,
      product_name: goods.product_name,
      product_image: goods.product_image,
      product_stock: goods.product_stock,
      product_price: goods.product_price
    }]));
    router.push('/order');
  }
  return (
    <div className={styles.button_container}>
      <button onClick={handleCart} className={styles.cart_button}>
        <BsFillCartFill size={40}></BsFillCartFill>장바구니 담기
      </button>
      <button onClick={handleOrder} className={styles.order_button}>주문하기</button>
    </div>
  );
};

export default BoriGoodsDetailController;