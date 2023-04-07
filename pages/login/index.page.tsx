import Loading from "@/components/loading/Loading/Loading";
import { useLoginMutation } from "@/hooks/auth/useLoginMutation/useLoginMutation";
import { useNotLoginCheckQuery } from "@/hooks/auth/useNotLoginCheckQuery/useNotLoginCheckQuery";
import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";
import { ILogin } from "@/types/auth";
import { validateEmail, validatePassword } from "@/utils/validate";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./login.module.scss";
import googleImage from "/public/login/google.png";
import kakaoImage from "/public/login/kakao.png";

const Login = () => {
  const { setDialog, setDialogText } = useValidateDialog();
  const [account, setAccount] = useState<ILogin>({
    email: "",
    password: "",
  });
  const { isLoading } = useNotLoginCheckQuery();
  const loginMutation = useLoginMutation({
    loginInfo: account
  });
  const handleLogin = () => {
    if (!(account.email && account.password)) {
      setDialogText("이메일 비밀번호를 입력해주세요.");
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
      <NextSeo
        title="로그인"
        description="어서오세요! 로그인을 하시고 더 다양한 기능을 활용해보세요~"/>
      {(loginMutation.isLoading || isLoading) && <Loading></Loading>}
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
          <div className={styles.validate_text}>
            {validateEmail(account.email)}
          </div>
          <div className={styles.input_container}>
            <p>비밀번호:</p>
            <input
              role="password"
              type="password"
              name="password"
              onKeyDown={handleOnKeyDown}
              onChange={onChangeAccount}
            />
          </div>
          <div className={styles.validate_text}>
            {validatePassword(account.password)}
          </div>
          <div>
            <button
              aria-label="로그인 버튼"
              className={styles.login_button}
              onClick={() => handleLogin()}
              role="login"
            >
              로그인
            </button>
            <Link href="/join" aria-label="회원가입 페이지로 이동">
              <button aria-label="회원가입 버튼" className={styles.join_button}>회원가입</button>
            </Link>
          </div>
          <div style={{fontSize: '0.8rem', marginBottom: '1rem', fontWeight: 800}}>
            <Link href="/find-password" aria-label="비밀번호 찾기 페이지로 이동">😲비밀번호를 까먹었어요!</Link>
          </div>
        </div>
        <Link href={`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/kakao`} aria-label="카카오 로그인하기">
          <button aria-label="카카오 로그인 버튼 버튼" className={styles.kakao_login_button}>
            <Image width={35} height={35} src={kakaoImage} alt="카카오 로그인" />
            카카오 로그인
          </button>
        </Link>
        <Link href={`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/google`} aria-label="구글 로그인하기">
          <button aria-label="구글 로그인 버튼" className={styles.google_login_button}>
            <Image width={35} height={35} src={googleImage} alt="구글 로그인" />
            구글 로그인
          </button>
        </Link>
      </div>
    </>
  );
};

export default Login;
