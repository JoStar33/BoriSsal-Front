import { RootState } from '@/store';
import Image from 'next/image';
import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const UserBar = () => {
  const { user } = useSelector((state: RootState) => state.userStore)
  return (
    <div>
      <BsFillCartFill size={40}></BsFillCartFill>
      {
        user.profile_image 
          ? <Image
              width={40}
              height={40}
              alt=''
              src={user.profile_image}></Image>
          : <div></div>
      }
      <h1>Welcome {user.nick}</h1>
    </div>
  );
};

export default UserBar;