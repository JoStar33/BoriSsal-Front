import React, { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import Image from 'next/image';
import logo from '/public/images/logo.jpg';
import { AiOutlineMenu } from 'react-icons/ai';
import SideBar from '../SideBar/SideBar';

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.side_bar_button}>
          <AiOutlineMenu
            size={30}
            onClick={() => setShowSideBar(!showSideBar)}/>
        </div>
        <div className={styles.logo_box}>
          <Link
            href="/"
            aria-label='메인페이지로 이동'
          >
            <Image
              src={logo}
              alt="logo image"
              width={50}
              height={50}
            ></Image>
          </Link>
        </div>
      </div>
      {
        showSideBar && <SideBar setShowSideBar={setShowSideBar}></SideBar>
      }
    </>
  );
};

export default Header;