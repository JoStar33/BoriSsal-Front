import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import mainImage1 from '/public/images/main_image1.png';
import mainImage2 from '/public/images/main_image2.png';
import mainImage4 from '/public/images/main_image4.png';
import mainImage5 from '/public/images/main_image5.png';
import mainImage6 from '/public/images/main_image6.png';
import mainImage7 from '/public/images/main_image7.png';
import mainImage8 from '/public/images/main_image8.png';
import styles from './main_viewer.module.scss';

const MainViewer = () => {
  const [position, setPosition] = useState(0);
  const onScroll = () => {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <figure
        role="image_test1"
        className={styles.bori_img1} style={{ width: '25vw', height: '35vw' }}>
        <Image
          className={styles.bori_img1}
          fill
          src={mainImage7}
          alt=""
        />
      </figure>
      <div
        className={styles.bg}
        style={{
          backgroundPositionY: position / 2,
        }}
      >
        <h1>보리쌀에 온걸 환영해</h1>
      </div>
      <div
        className={styles.bg}
        style={{
          backgroundPositionY: position / -3,
        }}
      >
        <h1>안녕🐶</h1>
      </div>
      <figure
        role="image_test2"         
        className={styles.bori_img2}
        style={{
          width: '23vw', 
          height: '37vw',
          transform: `translateX(${-position}px)`,
        }}>
        <Image
          src={mainImage5}
          fill
          alt=""
        />
      </figure>
      <figure         
        className={styles.bori_img3}
        style={{
          width: '35vw', 
          height: '20vw',
          transform: `translateX(${position}px)`,
        }}>
        <Image
          role="image_test3"
          src={mainImage4}
          fill
          alt=""
        />
      </figure>
      <p
        className={styles.desc3}
        style={{
          opacity: (position - 750) / 50,
        }}
      >
        보리는 세상에서 제일 귀여운 강아지입니다.
      </p>
      <p
        className={styles.desc3}
        style={{
          opacity: (position - 850) / 50,
        }}
      >
        이렇게 귀여운 강아지를
      </p>
      <p
        className={styles.desc3}
        style={{
          opacity: (position - 950) / 50,
        }}
      >
        저 혼자만 볼 순 없죠.
      </p>
      <p
        className={styles.desc3}
        style={{
          opacity: (position - 1050) / 50,
        }}
      >
        보리의 매력에 빠져보세요!
      </p>
      <figure
        className={styles.bori_img4}
        role="image_test"
        style={{
          width: '33vw', 
          height: '20vw',
          transform: `translateY(${position / 2}px)`,
        }}>
        <Image
          src={mainImage1}
          fill
          alt=""
        />
      </figure>
      <figure
        className={styles.bori_img5}
        style={{
          width: '14vw', 
          height: '20vw',
          transform: `translateY(${position / 4}px)`,
        }}>
        <Image
          src={mainImage2}
          fill
          alt=""
        />
      </figure>
      <figure
        className={styles.bori_img6}
        style={{
          width: '30vw', 
          height: '43vw',
          transform: `translateX(${-position/2 + 100}px)`,
        }}>
        <Image
          src={mainImage6}
          fill
          alt=""/>
        </figure>
      <div
        className={styles.last_box}
        >
        <Image
          src={mainImage8}
          width={300}
          height={300}
          alt=""/>
        <h1>어때 우리 귀여운 보리</h1>
        <h1>만나보지 않을래?</h1>
        <div className={styles.last_button_box}>
          <button className={styles.goods_button}>굿즈페이지 가기</button>
          <button className={styles.bori_gallery_button}>보리갤러리 가기</button>
        </div>
      </div>
    </div>
  );
};

export default MainViewer;