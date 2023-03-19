import Link from "next/link";
import React from "react";
import styles from "./side_bar.module.scss";
import { IoIosExit } from "react-icons/io";

interface IProps {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};
const SideBar = ({ setShowSideBar }: IProps) => {
  return (
    <div className={styles.side_bar}>
      <div className={styles.exit_box} onClick={() => setShowSideBar(false)}>
        <IoIosExit
          size={50}
          style={{ marginRight: "10px", cursor: "pointer" }}
        />
      </div>
      <Link href="/" aria-label="메인페이지로 이동">
        <div className={styles.menu_box}>메인 페이지</div>
      </Link>
      <Link href="/bori-goods" aria-label="굿즈페이지로 이동">
        <div className={styles.menu_box}>굿즈 페이지</div>
      </Link>
      <Link href="/bori-gallery" aria-label="보리갤러리 페이지로 이동">
        <div className={styles.menu_box}>갤러리 페이지</div>
      </Link>
    </div>
  );
};

export default SideBar;
