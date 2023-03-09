import React from 'react';
import Image from 'next/image';
import { RootState } from "@/store";
import { useSelector } from 'react-redux';
import styles from './userpage.module.scss';

const UserPage = () => {
  const { user } = useSelector((state: RootState) => state.userStore);
  
  return (
    <div className={styles.userpage_container}>
      <div className={styles.user_image__deliver_info}>
        <div className={styles.user_image}>
          <h1>회원정보</h1>
          {
            user.profile_image 
            ? <Image
                alt=''
                width={200}
                height={200}
                src={user.profile_image}>
              </Image>
            : <div className={styles.none_image}></div>
          }
        </div>
        <div className={styles.user_deliver_address}>
          <h1>배송정보 변경</h1>
          <div>
            <p>전화번호: </p>
            <input type="text" />
          </div>
          <div>
            <p>주소: </p>
            <input type="text" />
          </div>
          <div>
            <p>상세주소: </p>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className={styles.user_info_part}>
        <p>회원 이메일: {user.email}</p>
        <p>회원 닉네임: {user.nick}</p>
        <button>비밀번호 변경</button>
      </div>
    </div>
  );
};

export default UserPage;