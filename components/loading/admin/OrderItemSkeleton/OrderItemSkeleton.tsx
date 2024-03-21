import styles from './order_item_skeleton.module.scss';

const OrderItemSkeleton = () => {
  return (
    <div className={styles.order_item_container}>
      <div className={styles.order_info}>
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className={styles.order_control_part}>
        <div className={styles.price} />
        <div className={styles.deliver_button} />
      </div>
      <div className={styles.goods_info_part}>
        <div />
      </div>
    </div>
  );
};

export default OrderItemSkeleton;
