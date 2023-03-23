import CartItem from '@/components/cart/CartItem';
import { useLoginCheckQuery } from '@/hooks/auth/useLoginCheckQuery/useLoginCheckQuery';
import { useDeliverAddressQuery } from '@/hooks/user/useDeliverAddressQuery/useDeliverAddressQuery';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useMemo } from 'react';
import { RootState } from '@/store';
import styles from './complete_order_page.module.scss';
import Link from 'next/link';
import { render, pop } from '@/utils/congratulate';
import { setPageState } from '@/store/user';
import ErrorPage from '@/components/error/ErrorPage/ErrorPage';
import UserInfoViewer from '@/components/order/UserInfoViewer/UserInfoViewer';
import { initDeliver } from '@/utils/initData';

const CompleteOrderPage = () => {
  useLoginCheckQuery();
  const dispatch = useDispatch();
  let { data } = useDeliverAddressQuery();
  if(!data) {
    data = initDeliver;
  }
  const { pageState } = useSelector((state: RootState) => state.userStore);
  const { cart } = useSelector((state: RootState) => state.cartStore);
  const totalPrice = useMemo(() => {
    return cart.reduce((_total, cartElement) => {
      return _total + (cartElement.bori_goods_count * cartElement.bori_goods_price)}, 0);
  }, [cart]);
  useEffect(() => {
    if (pageState === 'order') {
      pop();
      render();
    }
    return () => {
      dispatch(setPageState(''));
    };
  });
  return (
    <>
      {
        pageState === 'order' 
        ? <div className={styles.order_container}>
            <div>
              <h1>결제가 완료됐습니다!</h1>
            </div>
            <h1 className={styles.info_head}>회원정보</h1>
            <UserInfoViewer/>
            <h1 className={styles.info_head}>배송지 정보</h1>
            <div className={styles.info_container}>
              <div className={styles.deliver_container}>
                <p>전화번호:</p>
                <p>{data.phone_number}</p>
              </div>
              <div className={styles.deliver_container}>
                <p>주소:</p>
                <p>{data.address}</p>
              </div>
              <div className={styles.deliver_container}>
                <p>상세주소:</p>
                <p>{data.address_detail}</p>
              </div>
            </div>
            <h1 className={styles.info_head}>주문 상품 정보</h1>
            <div className={styles.cart_container}>
              {
                cart.map(cartElement => 
                  <CartItem 
                    isOrder={true}
                    key={cartElement.bori_goods_id} 
                    cartGoods={cartElement}/>)
              }
            </div>
            <div className={styles.total_price_container} style={{marginTop: '2vw'}}>
              <p>최종 결제금액: </p>
              <p className={styles.total_price}>
                {
                  totalPrice
                }원
              </p>
            </div>
            <Link href='/'>
              <button className={styles.order_button}>홈으로 가기</button>
            </Link>
          </div>
        : <ErrorPage errorText='잘못된 접근입니다!' ></ErrorPage>
      }
    </>
  );
};

export default CompleteOrderPage;