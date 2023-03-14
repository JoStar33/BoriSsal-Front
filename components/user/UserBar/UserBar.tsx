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
                style={{borderRadius: '100px'}}
                width={40}
                height={40}
                alt=''
                src={process.env.NEXT_PUBLIC_BORI_SSAL_API_URL + user.profile_image}></Image>
            : <div className={styles.non_profile}></div>
        }
      </Link>
      <div className={styles.name_space}>
        <p>Welcome</p>
        <p>{user.nick}</p>
      </div>
      <button className={styles.logout_button}>Logout</button>
    </div>
  );
};

export default UserBar;