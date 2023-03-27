import OrderHistoryItem from "@/components/order/OrderHistoryItem/OrderHistoryItem";
import { useOrderQuery } from "@/hooks/order/useOrderQuery/useOrderQuery";
import { useDeliverAddressQuery } from "@/hooks/user/useDeliverAddressQuery/useDeliverAddressQuery";
import styles from './order_history_page.module.scss';

const OrderHistoryPage = () => {
  let {data: deliverAddress} = useDeliverAddressQuery();
  let { data: order } = useOrderQuery();
  if(!order) {
    order = [];
  }
  return (
    <div className={styles.order_history_page_container}>
      <h1>주문 내역</h1>
      {
        order.map(orderElement => <OrderHistoryItem deliverAddress={deliverAddress} key={orderElement._id} order={orderElement}></OrderHistoryItem>)
      }
    </div>
  );
};

export default OrderHistoryPage;