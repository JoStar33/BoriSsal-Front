import styles from './bori_goods_item_skeleton.module.scss';

const BoriGoodsItemSkeleton = () => {
  return (
    <div className={styles.goods_list_item_container}>
      <div className={styles.goods_image} />
      <div className={styles.goods_info}>
        <div />
        <div />
      </div>
      <div className={styles.middle_cover}>
        <div className={styles.select_container} />
        <div className={styles.stock_info} />
      </div>
      <div className={styles.desc_container} />
      <div className={styles.button_container}>
        <div />
        <div />
      </div>
    </div>
  );
};

export default BoriGoodsItemSkeleton;
