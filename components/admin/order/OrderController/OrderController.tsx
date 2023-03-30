import OrderStatusUpdateDialog from "@/components/dialogs/OrderStatusUpdateDialog/OrderStatusUpdateDialog";
import OrderEmpty from "@/components/order/OrderEmpty/OrderEmpty";
import { useSearch } from "@/hooks/common/useSearch/useSearch";
import { useAllOrderQuery } from "@/hooks/order/useAllOrderQuery/useAllOrderQuery";
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCaretDown } from "react-icons/ai";
import OrderItem from "../OrderItem/OrderItem";
import styles from './order_controller.module.scss';

const OrderController = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [limit, setLimit] = useState<number>(1);
  const [dialog, setDialog] = useState<boolean>(false);
  const updateOrderId = useRef<string>('');
  const { searchInfo, renderSearch } = useSearch();
  let { data, refetch } = useAllOrderQuery(limit, searchInfo, startDate, endDate);
  if(!data) {
    data = {
      order: [],
      overflow: true
    };
  };
  const showMoreOrder = async () => {
    setLimit(() => {
      return limit + 1;
    });
    setTimeout(() => {
      refetch();
    }, 300);
  };
  const handleSearch = async () => {
    setLimit(() => {
      return 1;
    });
    setTimeout(() => {
      refetch();
    }, 300);
  };
  return (
    <>
      {
        dialog && 
        <figure style={{marginLeft: "-5vw"}}>
          <OrderStatusUpdateDialog setDialog={setDialog} order_id={updateOrderId.current}/>
        </figure>
      }
      <div className={styles.order_controller_container}>
        <div className={styles.controller_container}>
          {
            renderSearch()
          }
          <div className={styles.date_box}>
            <div className={styles.date_container}>
              <p>시작일: </p>
              <DatePicker
                dateFormat="yyyy-MM-dd"
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
            </div>
            <div className={styles.date_container}>
              <p>종료일: </p>
              <DatePicker
                dateFormat="yyyy-MM-dd"
                selected={endDate}
                onChange={date => setEndDate(date)} 
                selectsEnd
                minDate={startDate}
                endDate={endDate}
              />
            </div>
            <button role="search-button" className={styles.search_button} onClick={handleSearch}>검색하기</button>
          </div>
        </div>
        <div className={styles.list_container}>
          {
            data.order.length !== 0
            ? data.order.map(orderElement => <OrderItem key={orderElement._id} order={orderElement} updateOrderId={updateOrderId} setDialog={setDialog}/>)
            : <OrderEmpty/>
          }
          {
            !data.overflow && 
            <button className={styles.more_show_button} onClick={() => showMoreOrder()}>
              더보기
              <AiFillCaretDown></AiFillCaretDown>
            </button>
          }
        </div>
      </div>
    </>
  );
};

export default OrderController;