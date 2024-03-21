import Loading from '@/components/loading/Loading/Loading';
import InputPart from '@/components/user/InputPart/InputPart';
import { useFindPassWordMutation } from '@/hooks/auth/useFindPassWordMutation/useFindPassWordMutation';
import { validateEmail } from '@/utils/validate';
import { NextSeo } from 'next-seo';
import React, { useState } from 'react';
import styles from './find_password.module.scss';

const FindPassWord = () => {
  const [email, setEmail] = useState('');
  const onChangeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const { mutate, isLoading } = useFindPassWordMutation(email);
  return (
    <>
      <NextSeo
        title="임시 비밀번호 발급"
        description="이런! 비밀번호를 잊어버리셨군요. 걱정하지마세요. 메일만 입력하시면 저희가 임시비밀번호를 발송해드릴게요."
      />
      {isLoading && <Loading />}
      <div className={styles.find_password_container}>
        <h1>임시 비밀번호 받기</h1>
        <div className={styles.input_box}>
          <InputPart
            onChangeAccount={onChangeAccount}
            validate={validateEmail(email)}
            inputName="email"
            inputLabel="이메일 주소: "
            textOrPassword="text"
          />
        </div>
        <button aria-label="비밀번호 발급 버튼" onClick={() => mutate()}>
          비밀번호 발급
        </button>
      </div>
    </>
  );
};

export default FindPassWord;
