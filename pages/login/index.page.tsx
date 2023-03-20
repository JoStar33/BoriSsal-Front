import React, { useState } from "react";
import styles from "./login.module.scss";
import Image from "next/image";
import kakaoImage from "/public/login/kakao.png";
import googleImage from "/public/login/google.png";
import { validateEmail, validatePassword } from "@/utils/validate";
import ValidateDialog from "@/components/dialogs/ValidateDialog/ValidateDialog";
import { useLoginMutation } from "@/hooks/auth/useLoginMutation";
import { useNotLoginCheckQuery } from "@/hooks/auth/useNotLoginCheckQuery";
import { ILogin } from "@/types/auth";
import Loading from "@/components/loading/Loading/Loading";
import Link from "next/link";
import { AxiosError } from "axios";
import { errorMessage } from "@/apis/error/customError";
import InputPart from "@/components/user/InputPart/InputPart";

const Login = () => {
  const [dialog, setDialog] = useState<boolean>(false);
  const [dialogText, setDialogText] = useState<string>("");
  const [account, setAccount] = useState<ILogin>({
    email: "",
    password: "",
  });
  const { isError, isLoading, error } = useNotLoginCheckQuery();
  const loginMutation = useLoginMutation({
    loginInfo: account,
    setDialogText,
    setDialog,
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
      {isError && (
        <ValidateDialog
          text={errorMessage(error as AxiosError)}
          setDialog={setDialog}
        ></ValidateDialog>
      )}
      {(loginMutation.isLoading || isLoading) && <Loading></Loading>}
      {dialog && (
        <ValidateDialog
          text={dialogText}
          setDialog={setDialog}
        ></ValidateDialog>
      )}
      <div className={styles.login_container}>
        <h1>로그인</h1>
        <div className={styles.login_box}>
          <InputPart 
            onChangeAccount={onChangeAccount} 
            validate={validateEmail(account.email)} 
            inputName={"email"} 
            inputLabel="이메일: "
            textOrPassword="text"></InputPart>
          <InputPart 
            onChangeAccount={onChangeAccount} 
            validate={validateEmail(account.password)} 
            inputName="password" 
            inputLabel="비밀번호: "
            textOrPassword="password"></InputPart>
          <div>
            <button
              className={styles.login_button}
              onClick={() => handleLogin()}
              role="login"
            >
              로그인
            </button>
            <Link href="/join" aria-label="회원가입 페이지로 이동">
              <button className={styles.join_button}>회원가입</button>
            </Link>
          </div>
          <div style={{fontSize: '0.8rem', marginBottom: '1rem', fontWeight: 800}}>
            <Link href="/find-password" aria-label="비밀번호 찾기 페이지로 이동">😲비밀번호를 까먹었어요!</Link>
          </div>
        </div>
        <Link href={`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/kakao`} aria-label="카카오 로그인하기">
          <button className={styles.kakao_login_button}>
            <Image width={35} height={35} src={kakaoImage} alt="카카오 로그인" />
            카카오 로그인
          </button>
        </Link>
        <Link href={`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/google`} aria-label="구글 로그인하기">
          <button className={styles.google_login_button}>
            <Image width={35} height={35} src={googleImage} alt="구글 로그인" />
            구글 로그인
          </button>
        </Link>
      </div>
    </>
  );
};

export default Login;
