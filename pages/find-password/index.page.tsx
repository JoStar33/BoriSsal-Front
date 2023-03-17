import React, { useState } from 'react';
import { validateEmail } from '@/utils/validate';
import { useFindPassWordMutation } from '@/hooks/auth/useFindPassWordMutation';
import styles from './find_password.module.scss';
import InputPart from '@/components/user/InputPart/InputPart';
import ValidateDialog from '@/components/dialogs/ValidateDialog/ValidateDialog';
import { AxiosError } from 'axios';
import SuccessDialog from '@/components/dialogs/SuccessDialog/SuccessDialog';
import Loading from '@/components/loading/Loading/Loading';

const FindPassWord = () => {
  const [email, setEmail] = useState<string>('');
  const onChangeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const { mutate, isError, error, isSuccess, isLoading } = useFindPassWordMutation(email);
  return (
    <>
      {
        isError && <ValidateDialog text={((error as AxiosError).response?.data as any).message}></ValidateDialog>
      }
      {
        isSuccess && <SuccessDialog text='비밀번호 발급 성공! 메일을 확인해주세요.'></SuccessDialog>
      }
      {
        isLoading && <Loading></Loading>
      }
      <div className={styles.find_password_container}>
        <h1>임시 비밀번호 받기</h1>
        <div className={styles.input_box}>
          <InputPart onChangeAccount={onChangeAccount} validate={validateEmail(email)} type='email' info='이메일 주소: ' textOrPass='text'></InputPart>
        </div>
        <button onClick={() => mutate()}>비밀번호 발급</button>
      </div>
    </>
  );
};

export default FindPassWord;