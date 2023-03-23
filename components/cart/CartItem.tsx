import { useCartUpdateMutation } from '@/hooks/user/useCartUpdateMutation/useCartUpdateMutation';
import { useDeleteCartMutation } from '@/hooks/user/useDeleteCartMutation/useDeleteCartMutation';
import { decreaseCartState, increaseCartState } from '@/store/cart';
import { IGetCartGoods } from '@/types/cart';
import { validateCount } from '@/utils/validate';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import CartItemSkeleton from '../loading/CartItemSkeleton/CartItemSkeleton';
import styles from './cart_item.module.scss';

interface IProps {
  cartGoods: IGetCartGoods;
  isOrder: boolean;
}

const CartItem = ({cartGoods, isOrder}: IProps) => {
  const dispatch = useDispatch();
  const [cartCount, setCartCount] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null)
  const { mutate, isLoading } = useDeleteCartMutation(cartGoods.bori_goods_id);
  const updateCartMutation = useCartUpdateMutation(cartGoods._id, cartCount);
  useEffect(() => {
    if(!inputRef.current)
      return;
    inputRef.current.value = String(cartGoods.bori_goods_count);
  }, [cartGoods]);
  const handleRemoveItem = () => {
    mutate();
  };
  const handleIncreaseGoods = () => {
    dispatch(increaseCartState(cartGoods));
  };
  const handleDecreaseGoods = () => {
    dispatch(decreaseCartState(cartGoods));
  };
  const handleOnChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCartCount(parseInt(e.target.value));
  }
  const handleUpdateCount = () => {
    if(validateCount(cartCount)) {
      return;
    }
    updateCartMutation.mutate();
  } 
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
            {
              isOrder
              ? <p className={styles.cart_count_inc_dec_container}>
                  주문수량: {cartGoods.bori_goods_count}개
                  <BsFillArrowDownCircleFill
                    style={{width: '2vw', height: '2vw', marginLeft: '0.4vw', cursor: 'pointer'}}
                    onClick={handleIncreaseGoods}/>
                  <BsFillArrowUpCircleFill
                    style={{width: '2vw', height: '2vw', marginLeft: '0.4vw', cursor: 'pointer'}}
                    onClick={handleDecreaseGoods}/>
                </p>
              : <div className={styles.cart_count_container}>
                  <p>
                    주문수량:
                    <input ref={inputRef} type="number" onChange={handleOnChangeCount}/>
                    개
                    <button onClick={handleUpdateCount} className={styles.count_update_button}>수정</button>
                  </p>
                  <p className={styles.validate_count}>
                    {
                      validateCount(cartCount)
                    }
                  </p>
                </div>
            }
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