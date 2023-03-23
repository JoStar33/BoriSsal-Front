import CartItem from '@/components/cart/CartItem';
import { useCartQuery } from '@/hooks/user/useCartQuery/useCartQuery';
import styles from './cart_page.module.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCartState } from '@/store/cart';


const CartPage = () => {
  let { data: cartData } = useCartQuery();
  const dispatch = useDispatch();
  if (!cartData) {
    cartData = [];
  }
  const handleOrder = () => {
    if (!cartData) {
      cartData = [];
    }
    dispatch(setCartState(cartData));
  };
  return (
    <div className={styles.order_container}>
      <h1 className={styles.info_head}>장바구니 페이지</h1>
      <div className={styles.cart_container}>
        {
          cartData.map(cartElement => <CartItem key={cartElement._id} isOrder={false} cartGoods={cartElement}></CartItem>)
        }
      </div>
      <button className={styles.order_button} onClick={() => handleOrder()}>주문하러 가기</button>
    </div>
  );
};

export default CartPage;