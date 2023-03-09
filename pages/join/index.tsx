import React, { useState } from 'react';
import Loading from '@/components/loading/Loading';
import ValidateDialog from '@/components/dialogs/ValidateDialog/ValidateDialog';
import styles from './join.module.scss';
import Image from 'next/image';
import { useJoinMutation } from '@/hooks/auth/useJoinMutation';
import { validateEmail, validateNick, validatePassword, validatePasswordCheck } from '@/utils/validate';
import join1 from '/public/login/join1.png';
import join2 from '/public/login/join2.png';
import join3 from '/public/login/join3.png';
import join4 from '/public/login/join4.png';

const Join = () => {
  const [account, setAccount] = useState({
    email: "",
    nick: "",
    password: "",
    passwordCheck: "",
  });
  const [dialogText, setDialogText] = useState<string>('');
  const [dialog, setDialog] = useState(false);
  const joinMutation = useJoinMutation({
    joinInfo: {
      email: account.email,
      nick: account.email,
      password: account.email,
    }, 
    setDialogText, 
    setDialog});
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
    joinMutation.mutate();
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
        dialog && <ValidateDialog text={dialogText} setDialog={setDialog}></ValidateDialog>
      }
      {
        joinMutation.isLoading && <Loading></Loading>
      }
      <div className={styles.join_container}>
        <h1>회원가입</h1>
        <div className={styles.join_container__part}>
          <Image
            width={80}
            height={110}
            alt=''
            src={join1}></Image>
          <div className={styles.input_container}>
            <p>이메일: </p>
            <input
              role="email"
              name="email"
              type="text"
              onChange={onChangeAccount} />
          </div>
          <div className={styles.validate_text}>{validateEmail(account.email)}</div>
        </div>
        <div className={styles.join_container__part}>
          <Image
            width={120}
            height={120}
            alt=''
            src={join2}></Image>
          <div className={styles.input_container}>
            <p>닉네임: </p>
            <input               
              role="nick"
              name="nick"
              type="text"
              onChange={onChangeAccount} />
          </div>
          <div className={styles.validate_text}>{validateNick(account.nick)}</div>
        </div>
        <div className={styles.join_container__part}>
          <Image
            width={100}
            height={150}
            alt=''
            src={join3}></Image>
          <div className={styles.input_container}>
            <p>비밀번호: </p>
            <input               
              role="password"
              name="password"
              type="password"
              onChange={onChangeAccount} />
          </div>
          <div className={styles.validate_text}>{validatePassword(account.password)}</div>
        </div>
        <div className={styles.join_container__part}>
          <Image
            width={100}
            height={100}
            alt=''
            src={join4}></Image>
          <div className={styles.input_container}>
            <div>
              <p>비밀번호 </p>
              <p>확인: </p>
            </div>
            <input               
              role="passwordCheck"
              name="passwordCheck"
              type="password"
              onChange={onChangeAccount} />
          </div>
          <div className={styles.validate_text}>{validatePasswordCheck(account.password, account.passwordCheck)}</div>
        </div>
        <button 
          role="join"
          onClick={() => join()}>회원가입</button>
      </div>
    </>
  );
};

export default Join;