import React, { useMemo, useState } from "react";
import Loading from "@/components/loading/Loading/Loading";
import ValidateDialog from "@/components/dialogs/ValidateDialog/ValidateDialog";
import styles from "./join.module.scss";
import Image from "next/image";
import { IJoin } from "@/types/auth";
import { useJoinMutation } from "@/hooks/auth/useJoinMutation";
import {
  validateEmail,
  validateNick,
  validatePassword,
  validatePasswordCheck,
} from "@/utils/validate";
import join1 from "/public/login/join1.png";
import join2 from "/public/login/join2.png";
import join3 from "/public/login/join3.png";
import join4 from "/public/login/join4.png";
import InputPart from "@/components/user/InputPart/InputPart";
import SuccessDialog from "@/components/dialogs/SuccessDialog/SuccessDialog";
import DuplicateCheckPart from "@/components/user/DuplicateCheckPart/DuplicateCheckPart";

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
  const [dialogText, setDialogText] = useState<string>("");
  const [dialog, setDialog] = useState<boolean>(false);
  const joinInfo = useMemo<IJoin>(() => {
    return {
      email: account.email,
      nick: account.nick,
      password: account.password,
    }
  }, [account]);
  const { mutate, isLoading, isSuccess } = useJoinMutation({
    joinInfo,
    setDialogText,
    setDialog,
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
      {dialog && (
        <ValidateDialog
          text={dialogText}
          setDialog={setDialog}
        ></ValidateDialog>
      )}
      {
        isLoading && <Loading></Loading>
      }
      {
        isSuccess && <SuccessDialog text="회원가입에 성공했어요!"></SuccessDialog>
      }
      <div className={styles.join_container}>
        <h1>회원가입</h1>
        <div className={styles.join_container__part}>
          <Image width={80} height={110} alt="이메일 보리" src={join1}></Image>
          <InputPart validate={validateEmail(account.email)} info="🐶이메일:" type="email" textOrPass="text" onChangeAccount={onChangeAccount}></InputPart>
          <DuplicateCheckPart validate={validateEmail(account.email)} info={account.email} type={true}></DuplicateCheckPart>
        </div>
        <div className={styles.join_container__part}>
          <Image width={110} height={110} alt="닉네임 보리" src={join2}></Image>
          <InputPart validate={validateNick(account.nick)} info="🐶닉네임:" type="nick" textOrPass="text" onChangeAccount={onChangeAccount}></InputPart>
          <DuplicateCheckPart validate={validateNick(account.nick)} info={account.nick} type={false}></DuplicateCheckPart>
        </div>
        <div className={styles.join_container__part}>
          <Image width={80} height={127} alt="비밀번호 보리" src={join3}></Image>
          <InputPart validate={validatePassword(account.password)} info="🐶비밀번호:" type="password" textOrPass="password" onChangeAccount={onChangeAccount}></InputPart>
        </div>
        <div className={styles.join_container__part}>
          <Image width={100} height={110} alt="비밀번호 확인 보리" src={join4}></Image>
          <InputPart validate={validatePasswordCheck(account.password, account.passwordCheck)} info="🐶비밀번호 확인:" type="passwordCheck" textOrPass="password" onChangeAccount={onChangeAccount}></InputPart>
        </div>
        <button className={styles.join_button} role="join" onClick={() => join()}>
          회원가입
        </button>
      </div>
    </>
  );
};

export default Join;
