import { usePageStore } from "@/store/page";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./main_viewer.module.scss";
import mainImage1 from "/public/images/main_image1.png";
import mainImage2 from "/public/images/main_image2.png";
import mainImage4 from "/public/images/main_image4.png";
import mainImage5 from "/public/images/main_image5.png";
import mainImage6 from "/public/images/main_image6.png";
import mainImage7 from "/public/images/main_image7.png";
import mainImage8 from "/public/images/main_image8.png";

const MainViewer = () => {
  const [position, setPosition] = useState<number>(0);
  const onScroll = () => {
    setPosition(window.scrollY);
  };
  const { setPageState } = usePageStore();
  useEffect(() => {
    setPageState("");
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <figure
        role="image_test1"
        className={styles.bori_img1}
        style={{ width: "27vw", height: "48vw" }}
      >
        <Image
          className={styles.bori_img1}
          fill
          style={{objectFit: "cover"}}
          src={mainImage7}
          sizes="(min-width: 25vw) 25vw, (min-width: 35vw) 35vw, 35vw"
          alt="웃는 보리"
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
          width: "23vw",
          height: "45vw",
          transform: `translateX(${-position}px)`,
        }}
      >
        <Image
          src={mainImage5}
          fill
          style={{objectFit: "cover"}}
          alt="움직이는 보리1"
          sizes="(min-width: 23vw) 23vw, (min-width: 37vw) 37vw, 37vw"
        />
      </figure>
      <figure
        className={styles.bori_img3}
        style={{
          width: "40vw",
          height: "21vw",
          transform: `translateX(${position}px)`,
        }}
      >
        <Image
          role="image_test3"
          src={mainImage4}
          fill
          style={{objectFit: "cover"}}
          alt="움직이는 보리2"
          sizes="(min-width: 35vw) 35vw, (min-width: 20vw) 20vw, 20vw"
        />
      </figure>
      <p
        className={styles.desc3}
        style={{
          opacity: (position - 850) / 30,
        }}
      >
        보리는 세상에서 제일 귀여운 강아지입니다.
      </p>
      <p
        className={styles.desc3}
        style={{
          opacity: (position - 950) / 30,
        }}
      >
        이렇게 귀여운 강아지를
      </p>
      <p
        className={styles.desc3}
        style={{
          opacity: (position - 1050) / 30,
        }}
      >
        저 혼자만 볼 순 없죠.
      </p>
      <p
        className={styles.desc3}
        style={{
          opacity: (position - 1150) / 50,
        }}
      >
        보리의 매력에 빠져보세요!
      </p>
      <figure
        className={styles.bori_img4}
        role="image_test"
        style={{
          width: "33.4vw",
          height: "23vw",
          transform: `translateY(${position / 2}px)`,
        }}
      >
        <Image
          src={mainImage1}
          fill
          style={{objectFit: "cover"}}
          alt="멍보리"
          sizes="(min-width: 35vw) 35vw, (min-width: 20vw) 20vw, 20vw"
        />
      </figure>
      <figure
        className={styles.bori_img5}
        style={{
          width: "14vw",
          height: "26vw",
          transform: `translateY(${position / 8}px)`,
        }}
      >
        <Image src={mainImage2} fill alt="흐릿보리" style={{objectFit: "cover"}} />
      </figure>
      <figure
        className={styles.bori_img6}
        style={{
          width: "30vw",
          height: "58vw",
          position: "relative",
          transform: `translateX(${-position / 3}px)`,
        }}
      >
        <Image
          style={{objectFit: "cover"}}
          src={mainImage6}
          fill
          alt="눕는 보리"
          sizes="(min-width: 35vw) 35vw, (min-width: 20vw) 20vw, 20vw"
        />
      </figure>
      <div className={styles.last_box}>
        <figure style={{ width: "26.1vw", height: "25vw", position: "relative" }}>
          <Image
            style={{objectFit: "cover"}}
            src={mainImage8}
            fill
            alt="애기보리"
            sizes="(min-width: 35vw) 35vw, (min-width: 20vw) 20vw, 20vw"
          />
        </figure>
        <h1>어때 우리 귀여운 보리</h1>
        <h1>만나보지 않을래?</h1>
        <div className={styles.last_button_box}>
          <Link href="/bori-goods" aria-label="굿즈페이지로 이동">
            <button
              aria-label="굿즈 페이지 가기"
              className={styles.goods_button}
            >
              굿즈페이지 가기
            </button>
          </Link>
          <Link href="/bori-gallery" aria-label="보리갤러리 페이지로 이동">
            <button
              aria-label="보리갤러리 가기"
              className={styles.bori_gallery_button}
            >
              보리갤러리 가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainViewer;
