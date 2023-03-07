import React from 'react';
import styles from './login.module.scss';
import Image from 'next/image';
import kakaoImage from '/public/login/kakao.png'

const Login = () => {
  return (
    <div className={styles.login_container}>
      <h1>로그인</h1>
      <div className={styles.login_box}>
        <div className={styles.input_container}>
          <p>이메일:</p>
          <input type="text" />
        </div>
        <div className={styles.input_container}>
          <p>비밀번호:</p>
          <input type="password" />
        </div>
        <div>
          <button className={styles.login_button}>로그인</button>
          <button className={styles.join_button}>회원가입</button>
        </div>
      </div>
      <button className={styles.kakao_login_button}>
        <Image
          width={35}
          height={35}     
          src={kakaoImage}
          alt=""
        />
        카카오 로그인
      </button>
      <button>구글 로그인</button>
    </div>
  );
};

export default Login;