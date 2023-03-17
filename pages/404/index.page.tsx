import React from 'react';
import Image from 'next/image';
import error_bori from '/public/404/404_bori.png';
import styles from './custom_404.module.scss';

const Custom404 = () => {
  return (
    <div className={styles.custom_404_container}>
      <Image
        width={220}
        height={400}
        src={error_bori}
        alt='404 에러창입니다.'></Image>
      <div className={styles.text_container}>
        <h1>찾을 수 없는 페이지입니다.</h1>
        <h1>다시 찾아보세요!</h1>
      </div>
    </div>
  );
};

export default Custom404;