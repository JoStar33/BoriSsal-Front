import OrderEmpty from '@/components/order/OrderEmpty/OrderEmpty';
import OrderHistoryItem from '@/components/order/OrderHistoryItem/OrderHistoryItem';
import { useOrderQuery } from '@/hooks/order/useOrderQuery/useOrderQuery';
import { NextSeo } from 'next-seo';
import styles from './order_history_page.module.scss';

const OrderHistoryPage = () => {
  let { data: order } = useOrderQuery();
  if (!order) {
    order = [];
  }
  return (
    <>
      <NextSeo title="주문내역 페이지" description="사용자님의 주문내역을 확인해볼 수 있는 페이지입니다." />
      <div className={styles.order_history_page_container}>
        <h1>주문 내역</h1>
        {order.length !== 0 ? (
          order.map((orderElement) => <OrderHistoryItem key={orderElement._id} order={orderElement} />)
        ) : (
          <OrderEmpty />
        )}
      </div>
    </>
  );
};

export default OrderHistoryPage;
