import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from './same_email.module.scss';
import same_bori from '/public/same-email/same_bori.png';

const SameEmail = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/login');
    }, 3000);
  }, []);
  return (
    <>
      <NextSeo title="중복된 이메일" description="중복된 이메일로 접근하셨군요... 다시 확인하시고 로그인 해보세요!" />
      <div className={styles.same_email_container}>
        <div>
          <Image width={230} height={400} alt="이미 존재하는 이메일 보리" src={same_bori} />
          <div className={styles.text_container}>
            <h2>이런! 지금 입력하신 이메일은 이미 존재하는 이메일이에요.</h2>
            <h2>다시 확인하시고 로그인 부탁드릴게요.</h2>
          </div>
        </div>
        <h1>곧 로그인 페이지로 돌아가집니다!</h1>
      </div>
    </>
  );
};

export default SameEmail;
