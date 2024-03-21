import React from 'react';
import ReplySkeleton from '../ReplySkeleton/ReplySkeleton';
import styles from './reply_loading.module.scss';

const ReplyLoading = () => {
  return (
    <>
      <div className={styles.reply_input_container}>
        <div className={styles.label} />
        <div className={styles.input} />
        <div className={styles.button} />
      </div>
      <div className={styles.reply_container}>
        {new Array(8).fill(1).map((_, index) => (
          <ReplySkeleton key={index + 1} />
        ))}
      </div>
    </>
  );
};

export default ReplyLoading;
