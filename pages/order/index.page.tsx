import CartItem from '@/components/cart/CartItem';
import { useLoginCheckQuery } from '@/hooks/auth/useLoginCheckQuery/useLoginCheckQuery';
import { useDeliverAddressQuery } from '@/hooks/user/useDeliverAddressQuery/useDeliverAddressQuery';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { RootState } from '@/store';
import UserDeliverAddressPart from '@/components/user/UserDeliverAddressPart/UserDeliverAddressPart';
import styles from './orderpage.module.scss';
import ValidateDialog from '@/components/dialogs/ValidateDialog/ValidateDialog';
import { useOrderMutation } from '@/hooks/order/useOrderMutation/useOrderMutation';
import { setPageState } from '@/store/user';
import UserInfoViewer from '@/components/order/UserInfoViewer/UserInfoViewer';
import ErrorPage from '@/components/error/ErrorPage/ErrorPage';

//로그인 여부 확인 필요

const OrderPage = () => {
  useLoginCheckQuery();
  const { pageState } = useSelector((state: RootState) => state.userStore);
  const [dialog, setDialog]= useState<boolean>(false);
  const validateText = useRef<string>('');
  const { data } = useDeliverAddressQuery();
  const { cart } = useSelector((state: RootState) => state.cartStore);
  const { mutate } = useOrderMutation();
  const totalPrice = useMemo(() => {
    return cart.reduce((_total, cartElement) => {
      return _total + (cartElement.bori_goods_count * cartElement.bori_goods_price)}, 0);
  }, [cart]);
  const handleOrder = () => {
    if (cart.length === 0) {
      validateText.current = '최소 하나의 상품이 있어야합니다!';
      setDialog(true);
      return;
    };
    if (!data?.data[0].phone_number.length || !data?.data[0].address || !data?.data[0].address_detail) {
      validateText.current = '배송지 정보 입력을 모두 마쳐야 해요!';
      setDialog(true);
      return;
    };
    mutate();
  }
  return (
    <>
      {
        dialog && <ValidateDialog text={validateText.current} setDialog={setDialog}></ValidateDialog>
      }
      {
        pageState === 'order' 
        ? <div className={styles.order_container}>
            <h1 className={styles.info_head}>회원정보</h1>
            <UserInfoViewer/>
            <h1 className={styles.info_head}>배송지 정보</h1>
            <div className={styles.info_container}>
              <UserDeliverAddressPart 
                addressInfo={data?.data[0].phone_number}
                addressType="phone_number"
                labelInfo="전화번호: "></UserDeliverAddressPart>
              <UserDeliverAddressPart               
                addressInfo={data?.data[0].address}
                addressType="address"
                labelInfo="주소: "></UserDeliverAddressPart>
              <UserDeliverAddressPart 
                addressInfo={data?.data[0].address_detail}
                addressType="address_detail"
                labelInfo="상세주소: "></UserDeliverAddressPart>
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
            <button role="order-button" onClick={handleOrder} className={styles.order_button}>주문하기</button>
          </div>
        : <ErrorPage errorMessage='잘못된 접근입니다!'/>
      }
    </>
  );
};

export default OrderPage;