import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import styles from './bori_goods_detail_controller.module.scss';

const BoriGoodsDetailController = () => {
  return (
    <div className={styles.button_container}>
      <button className={styles.cart_button}>
        <BsFillCartFill size={40}></BsFillCartFill>장바구니 담기
      </button>
      <button className={styles.order_button}>주문하기</button>
    </div>
  );
};

export default BoriGoodsDetailController;