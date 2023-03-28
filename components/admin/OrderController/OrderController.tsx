import OrderEmpty from "@/components/order/OrderEmpty/OrderEmpty";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from './order_controller.module.scss';

const OrderController = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div className={styles.order_controller_container}>
      <div className={styles.controller_container}>
        <div className={styles.search_container}>
          <label htmlFor="search_goods">검색:</label>
          <input id='search_goods' type="text"/>
          <button>검색하기</button>
        </div>
        <div className={styles.date_box}>
          <div className={styles.date_container}>
            <p>시작일: </p>
            <DatePicker
              dateFormat="yyyy/MM/dd"
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
              dateFormat="yyyy/MM/dd"
              selected={endDate}
              onChange={date => setEndDate(date)} 
              selectsEnd
              minDate={startDate}
              endDate={endDate}
            />
          </div>
          <button>날짜별 검색하기</button>
        </div>
      </div>
      <div className={styles.list_container}>
        <OrderEmpty/>
      </div>
    </div>
  );
};

export default OrderController;