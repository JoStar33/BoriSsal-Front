import React from 'react';
import Image from 'next/image';
import { ICartGoods } from '@/types/cart';
import styles from './cart_item.module.scss';

interface IProps {
  cartGoods: ICartGoods;
}

const CartItem = ({cartGoods}: IProps) => {
  return (
    <div>
      <figure style={{width: '14vw', height: '14vw', position: 'relative'}}>
        <Image
          fill
          src={`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}${cartGoods.product_image}`}
          alt={cartGoods.product_name}></Image>
      </figure>
      <div>
        <p>제품명: {cartGoods.product_name}</p>
        <p>주문수량: {cartGoods.product_count}개</p>
        <p className={styles.reply_part_container}>{cartGoods.product_price}원</p>
      </div>
    </div>
  );
};

export default CartItem;