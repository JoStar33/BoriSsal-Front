import React from 'react';
import Image from 'next/image';
import { ICartGoods } from '@/types/cart';
import styles from './cart_item.module.scss';
import { GrClose } from 'react-icons/gr';
import { useDeleteCartMutation } from '@/hooks/user/useDeleteCartMutation/useDeleteCartMutation';
import CartItemSkeleton from '../loading/CartItemSkeleton/CartItemSkeleton';

interface IProps {
  cartGoods: ICartGoods;
  isOrder: boolean;
}

const CartItem = ({cartGoods, isOrder}: IProps) => {
  const { mutate, isLoading } = useDeleteCartMutation(cartGoods.bori_goods_id);
  const handleRemoveItem = () => {
    mutate();
  };
  return (
    <>
    {
      isLoading 
      ? <CartItemSkeleton></CartItemSkeleton>
      : <div className={styles.cart_item_container}>
          <figure style={{width: '14vw', height: '14vw', position: 'relative'}}>
            <Image
              fill
              src={`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}${cartGoods.bori_goods_image}`}
              alt={cartGoods.bori_goods_name}></Image>
          </figure>
          <div>
            <p>제품명: {cartGoods.bori_goods_name}</p>
            <p>주문수량: {cartGoods.bori_goods_count}개</p>
            <p className={styles.reply_part_container}>{cartGoods.bori_goods_price * cartGoods.bori_goods_count}원</p>
          </div>
          {
            !isOrder && 
            <div
              className={styles.default_close_button}
              onClick={() => handleRemoveItem()}
            >
              
              <GrClose style={{width: '2vw', height: '2vw', position: 'relative'}}></GrClose>
            </div>
          }
        </div>
    }
    </>
  );
};

export default CartItem;