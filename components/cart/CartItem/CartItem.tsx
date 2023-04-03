import { errorMessage } from '@/apis/error/customError';
import CartItemSkeleton from '@/components/loading/CartItemSkeleton/CartItemSkeleton';
import { useCartUpdateMutation } from '@/hooks/user/useCartUpdateMutation/useCartUpdateMutation';
import { useDeleteCartMutation } from '@/hooks/user/useDeleteCartMutation/useDeleteCartMutation';
import { useCartStore } from '@/store/cart';
import { usePageStore } from '@/store/page';
import { ICartGoods } from '@/types/cart';
import { validateCount } from '@/utils/validate';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { RiAlarmWarningFill } from 'react-icons/ri';
import styles from './cart_item.module.scss';

interface IProps {
  cart_id: string; 
  cartGoods: ICartGoods;
}

const CartItem = ({cart_id, cartGoods}: IProps) => {
  const { pageState } = usePageStore();
  const {decreaseCart, increaseCart} = useCartStore();
  const [cartCount, setCartCount] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const updateCartMutation = useCartUpdateMutation(cart_id, cartCount);
  const { mutate, isLoading } = useDeleteCartMutation(cart_id);
  useEffect(() => {
    if(!inputRef.current)
      return;
    inputRef.current.value = String(cartGoods.bori_goods_count);
  }, [cartGoods]);
  const handleRemoveItem = () => {
    mutate();
  };
  const handleIncreaseGoods = () => {
    increaseCart(cartGoods);
  };
  const handleDecreaseGoods = () => {
    decreaseCart(cartGoods);
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
              !cart_id
              ? (
                pageState !== 'complete-order' && 
                <p className={styles.cart_count_inc_dec_container}>
                  주문수량: {cartGoods.bori_goods_count}개
                  <BsFillArrowDownCircleFill
                    role='count-down-button'
                    style={{width: '2vw', height: '2vw', marginLeft: '0.4vw', cursor: 'pointer'}}
                    onClick={handleDecreaseGoods}/>
                  <BsFillArrowUpCircleFill
                    role='count-up-button'
                    style={{width: '2vw', height: '2vw', marginLeft: '0.4vw', cursor: 'pointer'}}
                    onClick={handleIncreaseGoods}/>
                </p>)
              : <div className={styles.cart_count_container}>
                  <p>
                    주문수량:
                    <input role='count-input' ref={inputRef} type="number" onChange={handleOnChangeCount}/>
                    개
                    <button aria-label="수정 버튼" onClick={handleUpdateCount} className={styles.count_update_button}>수정</button>
                    <div>
                      {updateCartMutation.isLoading && (
                        <div className={styles.mutation_handle_box}>
                          <div className={styles.loading}></div>
                        </div>
                      )}
                      {updateCartMutation.isError && (
                        <div className={styles.mutation_handle_box}>
                          <div className={styles.state_cover}>
                            <RiAlarmWarningFill style={{width: '2vw', height: '2vw'}} size={25} color="red"></RiAlarmWarningFill>
                          </div>
                          {errorMessage(updateCartMutation.error)}
                        </div>
                      )}
                      {updateCartMutation.isSuccess && (
                        <div className={styles.mutation_handle_box}>
                          <div className={styles.state_cover}>
                            <AiFillCheckCircle style={{width: '2vw', height: '2vw'}} color="green"></AiFillCheckCircle>
                          </div>
                          변경 성공!
                        </div>
                      )}
                    </div>
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
            cart_id && 
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