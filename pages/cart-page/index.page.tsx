import CartItem from '@/components/cart/CartItem';
import { useCartQuery } from '@/hooks/user/useCartQuery/useCartQuery';
import Cart from '@/store/cart';
import { IGetCartGoods } from '@/types/cart';
import styles from './cart_page.module.scss';
import React from 'react';

const CartPage = () => {
  const { data } = useCartQuery();
  const handleOrder = () => {
    
  };
  return (
    <div className={styles.order_container}>
      <h1 className={styles.info_head}>장바구니 페이지</h1>
      <div className={styles.cart_container}>
        {
          data?.data.map((cartElement: IGetCartGoods) => <CartItem key={cartElement._id} isOrder={false} cartGoods={cartElement}></CartItem>)
        }
      </div>
      <button className={styles.order_button}>주문하러 가기</button>
    </div>
  );
};

export default CartPage;