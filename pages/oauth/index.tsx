import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './oauth.module.scss'
import oauth_bori_ssuang from '/public/login/oauth_bori_ssuang.png';
import { userInfo } from '@/types/user';
import { useRouter } from 'next/router';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { setUserState } from '@/store/user';

const Oauth = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(()=> {
    const params = new URL(window.location.href.toString()).searchParams;
    const id = parseInt(params.get("id") as string);
    const email = params.get("email");
    const nick = params.get("nick"); 
    dispatch(setUserState({
      id: id,
      email: email,
      nick: nick
    } as unknown as userInfo));
    router.push('/');
  });
  return (
    <div className={styles.oauth_container}>
      <Image
        width={200}
        height={400}
        src={oauth_bori_ssuang}
        alt=""></Image>
      <div>
        <h1>잠시 기다려주세요!</h1>
        <h1>우리 보리가 열일 중이에요...</h1>
      </div>
    </div>
  );
};

export default Oauth;