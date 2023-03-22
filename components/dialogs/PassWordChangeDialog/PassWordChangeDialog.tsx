import React, { useEffect, useMemo, useState } from "react";
import { GrClose } from "react-icons/gr";
import { RiAlarmWarningFill } from "react-icons/ri";
import { AiFillCheckCircle } from "react-icons/ai";
import { validatePassword, validatePasswordCheck } from "@/utils/validate";
import { usePassWordChangeMutation } from "@/hooks/auth/usePassWordChangeMutation/usePassWordChangeMutation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Image from "next/image";
import password_bori from "/public/dialog/password_bori.png";
import styles from "./password_change_dialog.module.scss";
import InputPart from "@/components/user/InputPart/InputPart";
import Loading from "@/components/loading/Loading/Loading";
import { AxiosError } from "axios";
import SuccessDialog from "../SuccessDialog/SuccessDialog";
import { errorMessage } from "@/apis/error/customError";
import { IPasswordInfo } from "@/types/auth";
import { IPostPasswordInfo } from "@/types/auth";

interface IProps {
  setDialog: React.Dispatch<React.SetStateAction<boolean>>;
};


const PassWordChangeDialog = ({ setDialog }: IProps) => {
  const [account, setAccount] = useState<IPasswordInfo>({
    password: "",
    passwordCheck: "",
    newPassword: "",
    newPasswordCheck: "",
  });
  const postPassWord = useMemo<IPostPasswordInfo>(() => {
    return {
      password: account.password,
      newPassword: account.newPassword,
    }
  }, [account])
  const { mutate, isLoading, isError, error, isSuccess } =
    usePassWordChangeMutation(postPassWord);
  const onChangeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };
  const handlePassWordChange = () => {
    if (
      !(
        account.password &&
        account.passwordCheck &&
        account.newPassword &&
        account.newPasswordCheck
      )
    ) {
      return;
    }
    if (validatePassword(account.password)) {
      return;
    }
    if (validatePasswordCheck(account.password, account.passwordCheck)) {
      return;
    }
    if (validatePassword(account.newPassword)) {
      return;
    }
    if (validatePasswordCheck(account.newPassword, account.newPasswordCheck)) {
      return;
    }
    if (account.password === account.newPassword) {
      return;
    }
    mutate();
  };
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setDialog(false);
      }, 2000);
    }
  }, [isSuccess, setDialog]);
  return (
    <>
      { isSuccess && <SuccessDialog text="비밀번호 변경 성공!"></SuccessDialog>}
      { isLoading && <Loading></Loading> }
      <div className={styles.dialog_background}>
        {/*비밀번호 다이얼로그 배경*/}
        <div className={styles.dialog_container}>
          {/*비밀번호 다이얼로그 컨테이너*/}
          <div
            className={styles.default_close_button}
            onClick={() => setDialog(false)}
          >
            <GrClose size={30}></GrClose>
          </div>
          <Image
            width={80}
            height={65}
            alt=""
            className={styles.dialog_bori}
            src={password_bori}
          ></Image>
          <h2>비밀번호 변경</h2>
          {/*비밀번호 변경 안내 타이틀*/}
          <InputPart
            textOrPassword="password" 
            inputLabel="현재 비밀번호: "
            inputName="password"
            onChangeAccount={onChangeAccount}
            validate={validatePassword(account.password)}
          ></InputPart>
          <InputPart
            textOrPassword="password" 
            inputLabel="현재 비밀번호 확인: "
            inputName="passwordCheck"
            onChangeAccount={onChangeAccount}
            validate={validatePasswordCheck(
              account.password,
              account.passwordCheck
            )}
          ></InputPart>
          <InputPart
            textOrPassword="password" 
            inputLabel="새 비밀번호: "
            inputName="newPassword"
            onChangeAccount={onChangeAccount}
            validate={validatePassword(account.newPassword)}
          ></InputPart>
          <InputPart
            textOrPassword="password"  
            inputLabel="새 비밀번호 확인: "
            inputName="newPasswordCheck"
            onChangeAccount={onChangeAccount}
            validate={validatePasswordCheck(
              account.newPassword,
              account.newPasswordCheck
            )}></InputPart>
          <button role="password_change" onClick={handlePassWordChange}>
            비밀번호 변경
          </button>
          {!account.password &&
            !account.passwordCheck &&
            !account.newPassword &&
            !account.newPasswordCheck && (
              <div className={styles.mutation_handle_message}>
                입력바랍니다!🐶
              </div>
            )}
          {account.password && account.newPassword === account.password && (
            <div className={styles.mutation_handle_message}>
              이런 이전 비밀번호와 동일해요!🐶
            </div>
          )}
          {isError && (
            <div className={styles.mutation_handle_message}>
              <RiAlarmWarningFill size={25} color="red"></RiAlarmWarningFill>
              {errorMessage(error as AxiosError)}
            </div>
          )}
          {isSuccess && (
            <div className={styles.mutation_handle_message}>
              <AiFillCheckCircle size={25} color="green"></AiFillCheckCircle>
              비밀번호 변경 성공!
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PassWordChangeDialog;
