import { RootState } from '@/store';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './user_info_viewer.module.scss';

const UserInfoViewer = () => {
  const { user } = useSelector((state: RootState) => state.userStore);
  return (
    <div className={styles.info_container}>
      <p>이메일: 
        {
          user.email
        }
      </p>
      <p>유저 닉네임: 
        {
          user.nick
        }
      </p>
    </div>
  );
};

export default UserInfoViewer;