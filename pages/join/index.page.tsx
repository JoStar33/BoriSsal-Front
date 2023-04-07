import Loading from "@/components/loading/Loading/Loading";
import DuplicateCheckPart from "@/components/user/DuplicateCheckPart/DuplicateCheckPart";
import InputPart from "@/components/user/InputPart/InputPart";
import { useJoinMutation } from "@/hooks/auth/useJoinMutation/useJoinMutation";
import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";
import { IJoin } from "@/types/auth";
import {
  validateEmail,
  validateNick,
  validatePassword,
  validatePasswordCheck
} from "@/utils/validate";
import { NextSeo } from "next-seo";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import styles from "./join.module.scss";
import joinImage from '/public/login/join4.png';


interface IJoinAccount extends IJoin{
  passwordCheck: string;
}

const Join = () => {
  const [account, setAccount] = useState<IJoinAccount>({
    email: "",
    nick: "",
    password: "",
    passwordCheck: "",
  });
  const { setDialog, setDialogText } = useValidateDialog();
  const joinInfo = useMemo<IJoin>(() => {
    return {
      email: account.email,
      nick: account.nick,
      password: account.password,
    }
  }, [account]);
  const { mutate, isLoading } = useJoinMutation({
    joinInfo
  });
  const join = async () => {
    if (!(account.email && account.nick && account.password)) {
      setDialogText("닉네임 이메일 비밀번호를 입력해주세요.");
      setDialog(true);
      return;
    }
    if (validateEmail(account.email)) {
      return;
    }
    if (validateNick(account.nick)) {
      return;
    }
    if (validatePassword(account.password)) {
      return;
    }
    if (validatePasswordCheck(account.password, account.passwordCheck)) {
      return;
    }
    mutate();
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
        title="회원가입"
        description="회원가입이라니! 어서오세요ㅎㅎ 저희 보리쌀에서 보리를 보며 힐링하세요😁"/>
      {
        isLoading && <Loading></Loading>
      }
      <div className={styles.join_container}>
        <div className={styles.join_header}>
          <figure style={{width: "5vw", height: "7vw", position: "relative"}}>
            <Image src={joinImage} alt="회원가입을 안내하는 보리의 사진" fill></Image>
          </figure>
          <h1>회원가입</h1>
        </div>
        <div className={styles.join_container__part}>
          <InputPart validate={validateEmail(account.email)} inputLabel="🐶이메일:" inputName="email" textOrPassword="text" onChangeAccount={onChangeAccount}></InputPart>
          <DuplicateCheckPart validate={validateEmail(account.email)} info={account.email} type={true}></DuplicateCheckPart>
        </div>
        <div className={styles.join_container__part}>
          <InputPart validate={validateNick(account.nick)} inputLabel="🐶닉네임:" inputName="nick" textOrPassword="text" onChangeAccount={onChangeAccount}></InputPart>
          <DuplicateCheckPart validate={validateNick(account.nick)} info={account.nick} type={false}></DuplicateCheckPart>
        </div>
        <div className={styles.join_container__part}>
          <InputPart validate={validatePassword(account.password)} inputLabel="🐶비밀번호:" inputName="password" textOrPassword="password" onChangeAccount={onChangeAccount}></InputPart>
          <div style={{width: "13vw", height: "1vw"}}></div>
        </div>
        <div className={styles.join_container__part}>
          <InputPart validate={validatePasswordCheck(account.password, account.passwordCheck)} inputLabel="🐶비밀번호 확인:" inputName="passwordCheck" textOrPassword="password" onChangeAccount={onChangeAccount}></InputPart>
          <div style={{width: "13vw", height: "1vw"}}></div>
        </div>
        <button aria-label="회원가입 버튼" className={styles.join_button} role="join" onClick={() => join()}>
          회원가입
        </button>
      </div>
    </>
  );
};

export default Join;
