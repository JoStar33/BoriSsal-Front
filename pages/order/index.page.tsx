import CartItem from '@/components/cart/CartItem/CartItem';
import ValidateDialog from '@/components/dialogs/ValidateDialog/ValidateDialog';
import ErrorPage from '@/components/error/ErrorPage/ErrorPage';
import UserInfoViewer from '@/components/order/UserInfoViewer/UserInfoViewer';
import UserDeliverAddressPart from '@/components/user/UserDeliverAddressPart/UserDeliverAddressPart';
import { useLoginCheckQuery } from '@/hooks/auth/useLoginCheckQuery/useLoginCheckQuery';
import { useOrderMutation } from '@/hooks/order/useOrderMutation/useOrderMutation';
import { useDeliverAddressQuery } from '@/hooks/user/useDeliverAddressQuery/useDeliverAddressQuery';
import { useUserQuery } from '@/hooks/user/useUserQuery/useUserQuery';
import { useCartStore } from '@/store/cart';
import { usePageStore } from '@/store/page';
import { initUser } from '@/utils/initData';
import { useMemo, useRef, useState } from 'react';
import styles from './orderpage.module.scss';

//로그인 여부 확인 필요

const initData = {
  _id: '', 
  user_id: '', 
  phone_number: '', 
  address: '', 
  address_detail: ''
}

const OrderPage = () => {
  useLoginCheckQuery();
  const { cart } = useCartStore();
  const { pageState } = usePageStore();
  const [dialog, setDialog]= useState<boolean>(false);
  const validateText = useRef<string>('');
  let { data: deliverAddress } = useDeliverAddressQuery();
  let { data: user } = useUserQuery();
  const { mutate } = useOrderMutation();
  const totalPrice = useMemo(() => {
    return cart.reduce((_total, cartElement) => {
      return _total + (cartElement.bori_goods_count * cartElement.bori_goods_price)}, 0);
  }, [cart]);
  const orderShow = useMemo(() => {
    return pageState === 'order' ? true : false;
  }, [pageState]);
  if (!deliverAddress) {
    deliverAddress = initData;
  };
  if (!user) {
    user = initUser;
  };
  const handleOrder = () => {
    if (!deliverAddress) {
      deliverAddress = initData;
    }
    if (cart.length === 0) {
      validateText.current = '최소 하나의 상품이 있어야합니다!';
      setDialog(true);
      return;
    };
    if (!deliverAddress.phone_number || !deliverAddress.address || !deliverAddress.address_detail) {
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
        orderShow
        ? <div className={styles.order_container}>
            <h1 className={styles.info_head}>회원정보</h1>
            <UserInfoViewer user={user}/>
            <h1 className={styles.info_head}>배송지 정보</h1>
            <div className={styles.info_container}>
              <UserDeliverAddressPart 
                addressInfo={deliverAddress.phone_number}
                addressType="phone_number"
                labelInfo="전화번호: "/>
              <UserDeliverAddressPart               
                addressInfo={deliverAddress.address}
                addressType="address"
                labelInfo="주소: "/>
              <UserDeliverAddressPart 
                addressInfo={deliverAddress.address_detail}
                addressType="address_detail"
                labelInfo="상세주소: "/>
            </div>
            <h1 className={styles.info_head}>주문 상품 정보</h1>
            <div className={styles.cart_container}>
              {
                cart.map(cartElement => 
                  <CartItem 
                    cart_id={''}
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
        : <ErrorPage errorText='잘못된 접근입니다!'/>
      }
    </>
  );
};

export default OrderPage;