import OrderEmpty from "@/components/order/OrderEmpty/OrderEmpty";
import OrderHistoryItem from "@/components/order/OrderHistoryItem/OrderHistoryItem";
import { useOrderQuery } from "@/hooks/order/useOrderQuery/useOrderQuery";
import styles from './order_history_page.module.scss';

const OrderHistoryPage = () => {
  let { data: order } = useOrderQuery();
  if(!order) {
    order = [];
  }
  return (
    <div className={styles.order_history_page_container}>
      <h1>주문 내역</h1>
      {
        order.length !== 0
        ? order.map(orderElement => <OrderHistoryItem key={orderElement._id} order={orderElement}></OrderHistoryItem>)
        : <OrderEmpty/>
      }
    </div>
  );
};

export default OrderHistoryPage;