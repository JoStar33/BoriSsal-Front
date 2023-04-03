import { NextSeo } from 'next-seo';
import Image from 'next/image';
import styles from './custom_404.module.scss';
import error_bori from '/public/404/404_bori.png';

const Custom404 = () => {
  return (
    <>
      <NextSeo
        title="404페이지"
        description="잘못된 접근을 하셨군요... 다른 페이지로 접근해보시겠어요?"/>
      <div className={styles.custom_404_container}>
        <Image
          width={220}
          height={400}
          src={error_bori}
          sizes="
          (max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          alt='404 에러창입니다.'></Image>
        <div className={styles.text_container}>
          <h1>찾을 수 없는 페이지입니다.</h1>
          <h1>다시 찾아보세요!</h1>
        </div>
      </div>
    </>
  );
};

export default Custom404;