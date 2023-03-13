import React, { useState } from 'react';
import Image from 'next/image';
import { RootState } from "@/store";
import { useSelector } from 'react-redux';
import { useDeliverAddressQuery } from '@/hooks/user/useDeliverAddressQuery';
import UserDeliverAddressPart from '@/components/user/UserDeliverAddressPart/UserDeliverAddressPart';
import styles from './userpage.module.scss';
import PassWordChangeDialog from '@/components/dialogs/PassWordChangeDialog/PassWordChangeDialog';
import { useLoginCheckQuery } from '@/hooks/auth/useLoginCheckQuery';
import Loading from '@/components/loading/Loading';
import ValidateDialog from '@/components/dialogs/ValidateDialog/ValidateDialog';
import { BsFillPencilFill } from 'react-icons/bs';

const UserPage = () => {
  const { user } = useSelector((state: RootState) => state.userStore);
  const { data } = useDeliverAddressQuery({user_id: user.id});
  const [dialog, setDialog] = useState(false);
  const { isLoading, isError } = useLoginCheckQuery();
  return (
    <>
      {
        isLoading && <Loading></Loading>
      }
      {
        isError && <ValidateDialog text='로그인상태가 아닙니다!'></ValidateDialog>
      }
      { 
        dialog && <PassWordChangeDialog setDialog={setDialog}></PassWordChangeDialog> 
      }
      <div className={styles.userpage_container}>
        <div className={styles.user_image__deliver_info}>
          <div className={styles.user_image}>
            <h1>회원정보</h1>
            <div style={{position: 'relative'}}>
              {
                user.profile_image
                ? <div>
                    <Image
                      style={{borderRadius: '100px'}}
                      alt=''
                      width={200}
                      height={200}
                      src={user.profile_image}>
                    </Image>
                  </div>
                : <div className={styles.none_image}></div>
              }
              <label style={{cursor: 'pointer', position: 'absolute', top: '150px', left: '150px'}} className="input-file-button" htmlFor="input-file">
                <BsFillPencilFill
                  size={20}>
                </BsFillPencilFill>
              </label>
              <input
                id="input-file" 
                type="file"
                style={{display:"none"}}
                accept="image/png, image/jpeg" />
            </div>
          </div>
          <div className={styles.user_deliver_address}>
            <h1>배송정보 변경</h1>
            <UserDeliverAddressPart user_id={user.id} addressInfo={data?.data.phone_number} addressType='phone_number' labelInfo='전화번호: '></UserDeliverAddressPart>
            <UserDeliverAddressPart user_id={user.id} addressInfo={data?.data.address} addressType='address' labelInfo='주소: '></UserDeliverAddressPart>
            <UserDeliverAddressPart user_id={user.id} addressInfo={data?.data.address_detail} addressType='address_detail' labelInfo='상세주소: '></UserDeliverAddressPart>
          </div>
        </div>
        <div className={styles.user_info_part}>
          <p>회원 이메일: {user.email}</p>
          <p>회원 닉네임: {user.nick}</p>
          <button onClick={()=>setDialog(true)}>비밀번호 변경</button>
        </div>
      </div>
    </>
  );
};

export default UserPage;