import { useOrderStatusMutation } from '@/hooks/order/useOrderStatusMutation/useOrderStatusMutation';
import { GrClose } from 'react-icons/gr';
import styles from './order_status_update_dialog.module.scss';
interface IProps {
  order_id: string;
  setDialog: React.Dispatch<React.SetStateAction<boolean>>;
};


const OrderStatusUpdateDialog = ({setDialog, order_id}: IProps) => {
  const { mutate } = useOrderStatusMutation(order_id);
  const handleUpdateStatus = (status: string) => {
    mutate(status);
    setDialog(false);
  }
  return (
    <div className={styles.dialog_background}>
      <div className={styles.dialog_container}>
        <div
          className={styles.default_close_button}
          onClick={() => setDialog(false)}
        >
          <GrClose size={30}></GrClose>
        </div>
        <h1>배송상태 변경하기</h1>
        <button aria-label="배송준비" role="deliver-ready" style={{color: "black", backgroundColor: "#ffffff"}} onClick={() => handleUpdateStatus("배송준비")}>배송준비</button>
        <button aria-label="배송중" role="deliver-on" style={{color: "white", backgroundColor: "#5B59C1"}} onClick={() => handleUpdateStatus("배송중")}>배송중</button>
        <button aria-label="배송완료" role="deliver-over" style={{color: "white", backgroundColor: "#4DC667"}} onClick={() => handleUpdateStatus("배송완료")}>배송완료</button>
      </div>
    </div>
  );
};

export default OrderStatusUpdateDialog;