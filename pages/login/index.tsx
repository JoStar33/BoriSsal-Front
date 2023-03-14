import React, { useState } from 'react';
import styles from './login.module.scss';
import Image from 'next/image';
import kakaoImage from '/public/login/kakao.png'
import googleImage from '/public/login/google.png'
import { validateEmail, validatePassword } from '@/utils/validate';
import ValidateDialog from '@/components/dialogs/ValidateDialog/ValidateDialog';
import { useLoginMutation } from '@/hooks/auth/useLoginMutation';
import { loginType } from "@/types/auth";
import Loading from '@/components/loading/Loading';
import Link from 'next/link';

const Login = () => {
  const [dialog, setDialog] = useState(false);
  const [dialogText, setDialogText] = useState('');
  const [account, setAccount] = useState<loginType>({
    email: "",
    password: "",
  });
  const loginMutation = useLoginMutation({loginInfo: account, setDialogText, setDialog});
  const handleLogin = () => {
    if (!(account.email && account.password)) {
      setDialogText('이메일 비밀번호를 입력해주세요.');
      setDialog(true);
      return;
    }
    if (validateEmail(account.email)) {
      return;
    }
    if (validatePassword(account.password)) {
      return;
    }
    loginMutation.mutate();
  };
  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
  const onChangeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      {
        loginMutation.isLoading && <Loading></Loading>
      }
      {
        dialog && <ValidateDialog text={dialogText} setDialog={setDialog}></ValidateDialog>
      }
      <div className={styles.login_container}>
        <h1>로그인</h1>
        <div className={styles.login_box}>
          <div className={styles.input_container}>
            <p>이메일:</p>
            <input 
              role="email"
              type="text"  
              name="email"
              onKeyDown={handleOnKeyDown}
              onChange={onChangeAccount}
            />
          </div>
          <div className={styles.validate_text}>{validateEmail(account.email)}</div>
          <div className={styles.input_container}>
            <p>비밀번호:</p>
            <input 
              role="password"
              type="password"             
              name="password"
              onKeyDown={handleOnKeyDown}
              onChange={onChangeAccount} />
          </div>
          <div className={styles.validate_text}>{validatePassword(account.password)}</div>
          <div>
            <button 
              className={styles.login_button} 
              onClick={() => handleLogin()}
              role="login"
            >
                로그인
            </button>
            <Link href='/join'>
              <button className={styles.join_button}>회원가입</button>
            </Link>
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
        <button className={styles.google_login_button}>
          <Image
            width={35}
            height={35}     
            src={googleImage}
            alt=""
          />
          구글 로그인
        </button>
      </div>
    </>
  );
};

export default Login;