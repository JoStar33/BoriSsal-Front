import Loading from '@/components/loading/Loading/Loading';
import InputPart from '@/components/user/InputPart/InputPart';
import { useFindPassWordMutation } from '@/hooks/auth/useFindPassWordMutation/useFindPassWordMutation';
import { useSuccessDialog } from '@/hooks/common/useSuccessDialog/useSuccessDialog';
import { useValidateDialog } from '@/hooks/common/useValidateDialog/useValidateDialog';
import { validateEmail } from '@/utils/validate';
import React, { useState } from 'react';
import styles from './find_password.module.scss';

const FindPassWord = () => {
  const [email, setEmail] = useState<string>('');
  const { dialog, setDialog, setDialogText, renderDialog } = useValidateDialog();
  const { successDialog, setSuccessDialog, setSuccessDialogText, renderSuccessDialog } = useSuccessDialog();
  const onChangeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const { mutate, isLoading } = useFindPassWordMutation(email, setDialog, setDialogText, setSuccessDialog, setSuccessDialogText);
  return (
    <>
      {
        dialog && renderDialog()
      }
      {
        successDialog && renderSuccessDialog()
      }
      {
        isLoading && <Loading></Loading>
      }
      <div className={styles.find_password_container}>
        <h1>임시 비밀번호 받기</h1>
        <div className={styles.input_box}>
          <InputPart onChangeAccount={onChangeAccount} validate={validateEmail(email)} inputName='email' inputLabel='이메일 주소: ' textOrPassword='text'></InputPart>
        </div>
        <button onClick={() => mutate()}>비밀번호 발급</button>
      </div>
    </>
  );
};

export default FindPassWord;