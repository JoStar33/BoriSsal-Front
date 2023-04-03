import CartItem from '@/components/cart/CartItem/CartItem';
import ErrorPage from '@/components/error/ErrorPage/ErrorPage';
import UserInfoViewer from '@/components/order/UserInfoViewer/UserInfoViewer';
import { useLoginCheckQuery } from '@/hooks/auth/useLoginCheckQuery/useLoginCheckQuery';
import { useDeliverAddressQuery } from '@/hooks/user/useDeliverAddressQuery/useDeliverAddressQuery';
import { useUserQuery } from '@/hooks/user/useUserQuery/useUserQuery';
import { useCartStore } from '@/store/cart';
import { usePageStore } from '@/store/page';
import { pop, render } from '@/utils/congratulate';
import { initDeliver, initUser } from '@/utils/initData';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useEffect, useMemo } from 'react';
import styles from './complete_order_page.module.scss';

const CompleteOrderPage = () => {
  useLoginCheckQuery();
  let { data: user } = useUserQuery();
  let { data: deliverAddress } = useDeliverAddressQuery();
  if(!deliverAddress) {
    deliverAddress = initDeliver;
  }
  if(!user) {
    user = initUser;
  }
  const { pageState, setPageState } = usePageStore();
  const { cart } = useCartStore();
  const totalPrice = useMemo(() => {
    return cart.reduce((_total, cartElement) => {
      return _total + (cartElement.bori_goods_count * cartElement.bori_goods_price)}, 0);
  }, [cart]);
  const orderShow = useMemo(() => {
    return pageState === 'order' ? false : true;
  }, [pageState]);
  useEffect(() => {
    if (!orderShow) {
      pop();
      render();
    }
    return () => {
      setPageState('');
    };
  }, []);
  return (
    <>
      <NextSeo
        title="결제완료"
        description="구매해주셔서 감사합니다! 저희 보리간식 비용으로 사용하겠습니다"/>
      {
        !orderShow
        ? <div className={styles.order_container}>
            <div>
              <h1>결제가 완료됐습니다!</h1>
            </div>
            <h1 className={styles.info_head}>회원정보</h1>
            <UserInfoViewer user={user}/>
            <h1 className={styles.info_head}>배송지 정보</h1>
            <div className={styles.info_container}>
              <div className={styles.deliver_container}>
                <p>전화번호:</p>
                <p>{deliverAddress.phone_number}</p>
              </div>
              <div className={styles.deliver_container}>
                <p>주소:</p>
                <p>{deliverAddress.address}</p>
              </div>
              <div className={styles.deliver_container}>
                <p>상세주소:</p>
                <p>{deliverAddress.address_detail}</p>
              </div>
            </div>
            <h1 className={styles.info_head}>주문 상품 정보</h1>
            <div className={styles.cart_container}>
              {
                cart.map(cartElement => 
                  <CartItem 
                    key={cartElement.bori_goods_id}
                    cart_id={''} 
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