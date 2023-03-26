import Image from 'next/image';
import React from 'react';
import styles from './cart_empty.module.scss';
import cart_empty_bori from '/public/cart/cart_empty_bori.png'

const CartEmpty = () => {
  return (
    <div className={styles.cart_empty_container}>
      <figure style={{
        position: 'relative',
        width: '9vw',
        height: '16vw'}}>
        <Image
          fill
          alt='장바구니가 비어있습니다.'
          src={cart_empty_bori}
        ></Image>
      </figure>
      <h1>
        장바구니가 비어있습니다.
      </h1>
    </div>
  );
};

export default CartEmpty;