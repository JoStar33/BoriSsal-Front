import styles from './bori_goods_item_skeleton.module.scss';

const BoriGoodsItemSkeleton = () => {
  return (
    <div className={styles.goods_list_item_container}>
      <div className={styles.goods_image}></div>
      <div className={styles.goods_info}>
        <div></div>
        <div></div>
      </div>
      <div className={styles.middle_cover}>
        <div className={styles.select_container}></div>
        <div className={styles.stock_info}></div>
      </div>
      <div className={styles.desc_container}></div>
      <div className={styles.button_container}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default BoriGoodsItemSkeleton;