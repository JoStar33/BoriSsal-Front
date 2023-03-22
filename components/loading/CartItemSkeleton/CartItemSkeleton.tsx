import React from 'react';
import styles from './cart_item_skeleton.module.scss';

const CartItemSkeleton = () => {
  return (
    <div className={styles.cart_item_skeleton_container}>
      <div className={styles.skeleton_image}></div>
      <div>
        <div className={styles.info_part}></div>
        <div className={styles.info_part}></div>
        <div className={styles.info_part}></div>
      </div>
    </div>
  );
};

export default CartItemSkeleton;