import React from 'react';
import Image from "next/image";
import error_bori from '/public/404/404_bori.png';
import styles from './error_page.module.scss';

interface IProps {
  errorMessage: string;
}

const ErrorPage = ({errorMessage}: IProps) => {
  return (
    <div className={styles.error_page_container}>
      <Image
        width={220}
        height={400}
        src={error_bori}
        alt={errorMessage}></Image>
      <h1>
        {
          errorMessage
        }
      </h1>
    </div>
  );
};

export default ErrorPage;