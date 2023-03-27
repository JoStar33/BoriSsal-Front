import { useDeleteOrderMutation } from "@/hooks/order/useDeleteOrderMutation/useDeleteOrderMutation";
import { IDeliverAddress } from "@/types/deliverAddress";
import { IOrder } from "@/types/order";
import { initDeliver } from "@/utils/initData";
import { useMemo, useState } from "react";
import OrderHistoryGoodsItem from "../OrderHistoryGoodsItem/OrderHistoryGoodsItem";
import styles from './order_history_item.module.scss';

interface IProps {
  order: IOrder;
  deliverAddress?: IDeliverAddress;
}

const OrderHistoryItem = ({ order, deliverAddress }: IProps) => {
  const [goodsShow, setGoodsShow] = useState<boolean>(false);
  const { mutate } = useDeleteOrderMutation(order._id);
  const deliverStatusColor = useMemo<string>(() => {
    if(order.order_status === "배송중") 
      return "#5B59C1"
    if(order.order_status === "배송완료")
      return "#4DC667"
    return "#000000"
  }, [order])
  if(!deliverAddress) {
    deliverAddress = initDeliver;
  } 
  return (
    <div className={styles.order_item_box}>
      <div className={styles.order_item_container}>
        <div className={styles.order_info}>
          <p>{order.order_date.toLocaleString()}</p>
          <p>주문내역</p>
          <p>{deliverAddress.address}</p>
          <p>{deliverAddress.address_detail}</p>
          <p>{deliverAddress.phone_number}</p>
        </div>
        <div className={styles.order_controller}>
          <div>
            <p 
              role="deliver-status"
              className={styles.status}
              style={{
                color: deliverStatusColor
              }}>{order.order_status}</p>
            <p className={styles.price}>결제금액: {order.price}원</p>
          </div>
          <div className={styles.button_container}> 
            {
              order.order_status === "배송준비" && <button className={styles.order_cancel_button} onClick={() => mutate()}>주문 취소</button>
            }
            {
              goodsShow 
              ? <button className={styles.order_list_button} onClick={() => setGoodsShow(!goodsShow)}>닫기</button>
              : <button role="show-goods" className={styles.order_list_button} onClick={() => setGoodsShow(!goodsShow)}>구매 목록 보기</button>
            }
          </div>
        </div>
      </div>
      {
        goodsShow && order.order_detail.map(goods => <OrderHistoryGoodsItem boriGoods={goods} key={goods.bori_goods_id}/>)
      }
    </div>
  );
};

export default OrderHistoryItem;
