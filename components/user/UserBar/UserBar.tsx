import SuccessDialog from '@/components/dialogs/SuccessDialog/SuccessDialog';
import ValidateDialog from '@/components/dialogs/ValidateDialog/ValidateDialog';
import Loading from '@/components/loading/Loading/Loading';
import { useLogoutMutation } from '@/hooks/auth/useLogoutMutation';
import { RootState } from '@/store';
import { AxiosError } from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import styles from './userbar.module.scss'

const UserBar = () => {
  const { user } = useSelector((state: RootState) => state.userStore);
  const { mutate, isError, isLoading, isSuccess, error } = useLogoutMutation();
  return (
    <>
      {
        isError && <ValidateDialog text={((error as AxiosError).response?.data as any).message} ></ValidateDialog>
      }
      {
        isLoading && <Loading></Loading>
      }
      {
        isSuccess && <SuccessDialog text='로그아웃 성공!'></SuccessDialog>
      }
      <div className={styles.userbar_container}>
        <Link href='/cart-page'>
          <BsFillCartFill size={40}></BsFillCartFill>
        </Link>
        <Link className={styles.user_profile_container} href='/user-page'>
          {
            user.profile_image 
              ? <Image
                  role='profile'
                  style={{borderRadius: '100px'}}
                  width={40}
                  height={40}
                  alt=''
                  src={process.env.NEXT_PUBLIC_BORI_SSAL_API_URL + user.profile_image}></Image>
              : <div
                  role='non_profile'
                  className={styles.non_profile}></div>
          }
        </Link>
        <div className={styles.name_space}>
          <p>Welcome</p>
          <p>{user.nick}</p>
        </div>
        <button 
          className={styles.logout_button} 
          onClick={() => mutate()}>
          Logout
        </button>
      </div>
    </>
  );
};

export default UserBar;