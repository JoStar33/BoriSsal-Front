import Link from 'next/link';
import React from 'react';
import { IoIosExit } from 'react-icons/io';
import styles from './side_bar.module.scss';

type propsType = {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>
}
const SideBar = ({setShowSideBar}: propsType) => {
  return (
    <div className={styles.side_bar}>
      <div className={styles.exit_box} onClick={() => setShowSideBar(false)}>
        <IoIosExit size={35} style={{marginRight: "10px", cursor: "pointer"}}/>
      </div>
      <Link
        href="/"
        aria-label='메인페이지로 이동'>
        <div className={styles.menu_box}>메인 페이지</div>
      </Link>
      <Link
        href="/goods"
        aria-label='굿즈페이지로 이동'>
        <div className={styles.menu_box}>굿즈 페이지</div>
      </Link>
      <Link
        href="/bori-gallery"
        aria-label='메인페이지로 이동'>
        <div className={styles.menu_box}>갤러리 페이지</div>
      </Link>
    </div>
  );
};

export default SideBar;