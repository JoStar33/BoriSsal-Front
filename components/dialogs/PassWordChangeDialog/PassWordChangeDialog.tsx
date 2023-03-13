import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import password_bori from '/public/dialog/password_bori.png';
import styles from './password_change_dialog.module.scss';
import { GrClose } from 'react-icons/gr';
import { RiAlarmWarningFill } from 'react-icons/ri';
import { AiFillCheckCircle } from 'react-icons/ai';
import { validatePassword, validatePasswordCheck } from '@/utils/validate';
import { usePassWordChangeMutation } from '@/hooks/auth/usePassWordChangeMutation';
import Loading from '@/components/loading/Loading';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

type propsType = {
  setDialog: React.Dispatch<React.SetStateAction<boolean>>
}

const PassWordChangeDialog = ({setDialog}: propsType) => {
  const { user } = useSelector((state: RootState) => state.userStore);
  const [account, setAccount] = useState({
    password: "",
    passwordCheck: "",
    newPassword: "",
    newPasswordCheck: "",
  });
  const { mutate, isLoading, isError, error, isSuccess  } = usePassWordChangeMutation({id: user.id, password: account.password, newPassword: account.newPassword});
  const onChangeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };
  const handlePassWordChange = () => {
    if (!(account.password && account.passwordCheck && account.newPassword && account.newPasswordCheck)) {
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
      return
    }
    mutate();
  }
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setDialog(false);
      }, 2000)
    }
  }, [isSuccess])
  return (
    <>
      {
        isLoading && <Loading></Loading>
      }
      <div className={styles.dialog_background}>{/*비밀번호 다이얼로그 배경*/}
        <div className={styles.dialog_container}>{/*비밀번호 다이얼로그 컨테이너*/}
          <div className={styles.default_close_button} onClick={() => setDialog(false)}>
            <GrClose size={30}></GrClose>
          </div>
          <Image
            width={80}
            height={65}
            alt=''
            className={styles.dialog_bori}
            src={password_bori}></Image>
          <h2>비밀번호 변경</h2>{/*비밀번호 변경 안내 타이틀*/}
          <div className={styles.input_container}>{/*현재 비밀번호*/}
            <p>현재 비밀번호: </p>
            <input 
              role="password"
              onChange={onChangeAccount}
              name="password"
              type="password" /> 
          </div>
          <div className={styles.validate_text}>{validatePassword(account.password)}</div>
          <div className={styles.input_container}>{/*현재 비밀번호 확인*/}
            <p>현재 비밀번호 확인: </p>
            <input 
              role="passwordCheck"
              onChange={onChangeAccount}
              name="passwordCheck"
              type="password" /> 
          </div>
          <div className={styles.validate_text}>{validatePasswordCheck(account.password, account.passwordCheck)}</div>
          <div className={styles.input_container}>{/*바꾸고 싶은 비밀번호*/}
            <p>새 비밀번호: </p>
            <input 
              role="newPassword"
              onChange={onChangeAccount}
              name="newPassword"
              type="password" />   
          </div>
          <div className={styles.validate_text}>{validatePassword(account.newPassword)}</div>
          <div className={styles.input_container}>{/*바꾸고 싶은 비밀번호*/}
            <p>새 비밀번호 확인: </p>
            <input 
              role="newPasswordCheck"
              onChange={onChangeAccount}
              name="newPasswordCheck"
              type="password" />   
          </div>
          <div className={styles.validate_text}>{validatePasswordCheck(account.newPassword, account.newPasswordCheck)}</div>
          <button
            role='password_change'
            onClick={handlePassWordChange}>
            비밀번호 변경
          </button>
          {
            (!account.password &&
            !account.passwordCheck &&
            !account.newPassword &&
            !account.newPasswordCheck) && <div className={styles.mutation_handle_message}>입력바랍니다!🐶</div>
          }
          {
            (account.password && (account.newPassword === account.password)) && <div className={styles.mutation_handle_message}>이런 이전 비밀번호와 동일해요!🐶</div>
          }
          {
            isError && 
              <div className={styles.mutation_handle_message}>
                <RiAlarmWarningFill size={25} color='red'></RiAlarmWarningFill>{(error as Error)?.message}
              </div>
          }
          {
            isSuccess && 
              <div className={styles.mutation_handle_message}>
                <AiFillCheckCircle size={25} color='green'></AiFillCheckCircle>비밀번호 변경 성공!
              </div>
          }
        </div>
      </div>
    </>
  );
};

export default PassWordChangeDialog;