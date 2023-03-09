import React from 'react';
import Image from 'next/image';
import { RootState } from "@/store";
import { useSelector } from 'react-redux';

const UserPage = () => {
  const { user } = useSelector((state: RootState) => state.userStore)
  return (
    <div>
      <div>
        <div>
          <h1>회원정보 변경</h1>
          {
            user.profile_image 
            ? <Image
                alt=''
                width={100}
                height={100}
                src={user.profile_image}>
              </Image>
            : <div></div>
          }
        </div>
        <div>
          <p>{user.email}</p>
          <p>{user.nick}</p>
          <button>비밀번호 변경</button>
        </div>
      </div>
      <div>
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
  );
};

export default UserPage;