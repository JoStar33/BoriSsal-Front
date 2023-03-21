import React from 'react';
import styles from './reply_skeleton.module.scss';

const ReplySkeleton = () => {
  return (
    <div className={styles.reply_part_container}>
      <p></p>
      <p></p>
      <p></p>
      <div></div>
    </div>
  );
};

export default ReplySkeleton;