import React from 'react';
import Image from 'next/image';
import error_bori from '/public/404/404_bori.png';
import styles from './error_page.module.scss';
import { AxiosError } from 'axios';
import { errorMessage } from '@/apis/error/customError';

interface IProps {
  errorText?: string;
  error?: AxiosError | unknown;
}

const ErrorPage = ({ error, errorText }: IProps) => {
  return (
    <div className={styles.error_page_container}>
      <Image width={220} height={400} src={error_bori} alt={errorText || errorMessage(error)} />
      <h1>{errorText || errorMessage(error)}</h1>
    </div>
  );
};

export default ErrorPage;
