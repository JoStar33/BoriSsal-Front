import Link from 'next/link';
import React from 'react';
import { IoIosExit } from 'react-icons/io';
import styles from './side_bar.module.scss';

interface IProps {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideBar = ({ setShowSideBar }: IProps) => {
  const handleOnClick = () => {
    setShowSideBar(false);
  };
  return (
    <div className={styles.side_bar}>
      <div className={styles.exit_box} onClick={() => setShowSideBar(false)}>
        <IoIosExit size={50} style={{ marginRight: '10px', cursor: 'pointer' }} />
      </div>
      <Link onClick={handleOnClick} href="/" aria-label="메인페이지로 이동">
        <p className={styles.menu_box}>Main</p>
      </Link>
      <Link onClick={handleOnClick} href="/bori-goods" aria-label="굿즈페이지로 이동">
        <p className={styles.menu_box}>Goods</p>
      </Link>
      <Link onClick={handleOnClick} href="/bori-gallery" aria-label="보리갤러리 페이지로 이동">
        <p className={styles.menu_box}>Gallery</p>
      </Link>
    </div>
  );
};

export default SideBar;
