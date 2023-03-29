import { IOrder } from '@/types/order';
import { Dispatch, MutableRefObject, SetStateAction, useMemo, useState } from 'react';
import OrderGoodsItem from '../OrderGoodsItem/OrderGoodsItem';
import styles from './order_item.module.scss';

interface IProps {
  order: IOrder;
  updateOrderId: MutableRefObject<string>;
  setDialog: Dispatch<SetStateAction<boolean>>;
}

const OrderItem = ({order, updateOrderId, setDialog}: IProps) => {
  const [showDetailGoods, setShowDetailGoods] = useState<boolean>(false);
  const orderStatusColor = useMemo<string>(() => {
    if(order.order_status === "배송중") 
      return "#5B59C1";
    if(order.order_status === "배송완료")
      return "#4DC667"
    return "#000000";
  }, [order.order_status]);
  const handleUpdateState = () => {
    updateOrderId.current = order._id;
    setDialog(true);
  }
  return (
    <>
      <div className={styles.order_item_container}>
        <div className={styles.order_info}>
          <p>{ `주문자: ${order.email}` }</p>
          <p>{ `주문일: ${order.order_date.toLocaleString()}` }</p>
          <p>{ `주문주소: ${order.address}` }</p>
          <p>{ `상세 주문주소: ${order.address_detail}` }</p>
          <p>{ `연락처: ${order.phone_number}` }</p>
        </div>
        <div className={styles.order_control_part}>
          <p>{`주문금액: ${order.price}원`}</p>
          <button style={{backgroundColor: orderStatusColor}} onClick={handleUpdateState}>{order.order_status}</button>
        </div>
        <div className={styles.goods_info_part}>
          <button onClick={() => setShowDetailGoods(!showDetailGoods)}>상품 내역</button>
        </div>
      </div>
      {
        showDetailGoods && order.order_detail.map(boriGoods => <OrderGoodsItem key={boriGoods.bori_goods_id} boriGoods={boriGoods}/>)
      }
    </>
  );
};

export default OrderItem;