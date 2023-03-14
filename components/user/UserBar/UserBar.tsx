import { RootState } from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import styles from './userbar.module.scss'

const UserBar = () => {
  const { user } = useSelector((state: RootState) => state.userStore)
  return (
    <div className={styles.userbar_container}>
      <Link href='/cart-page'>
        <BsFillCartFill size={40}></BsFillCartFill>
      </Link>
      <Link className={styles.user_profile_container} href='/user-page'>
        {
          user.profile_image 
            ? <Image
                width={40}
                height={40}
                alt=''
                src={user.profile_image}></Image>
            : <div className={styles.non_profile}></div>
        }
      </Link>
      <div className={styles.name_space}>
        <p>Welcome</p>
        <p>{user.nick}</p>
      </div>
    </div>
  );
};

export default UserBar;