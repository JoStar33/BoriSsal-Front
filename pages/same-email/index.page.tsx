import React, { useEffect } from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';
import styles from './same_email.module.scss';
import same_bori from '/public/same-email/same_bori.png';

const SameEmail = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/login');
    }, 3000)
  })
  return (
    <div className={styles.same_email_container}>
      <div>
        <Image
          width={230}
          height={400}
          alt='이미 존재하는 이메일 보리'
          src={same_bori}></Image>
        <div className={styles.text_container}>
          <h2>이런! 지금 입력하신 이메일은 이미 존재하는 이메일이에요.</h2>
          <h2>다시 확인하시고 로그인 부탁드릴게요.</h2>
        </div>
      </div>
      <h1>곧 로그인 페이지로 돌아가집니다!</h1>
    </div>
  );
};

export default SameEmail;