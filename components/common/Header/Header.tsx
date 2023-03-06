import React from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import Image from 'next/image';
import logo from '/public/images/logo.jpg';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link
        href="/"
        aria-label='홈으로 이동'
      >
        <Image
          src={logo}
          alt="logo image"
          width={50}
          height={50}
        ></Image>
      </Link>
    </div>
  );
};

export default Header;