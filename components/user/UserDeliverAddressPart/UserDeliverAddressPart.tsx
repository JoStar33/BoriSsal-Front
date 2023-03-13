import React, { useEffect, useRef, useState } from 'react';
import { BsFillPencilFill, BsCheckLg } from 'react-icons/bs';
import styles from './user_deliver_address_part.module.scss';
import DaumPostcode from 'react-daum-postcode';
import { useDeliverAddressMutation } from '@/hooks/user/useDeliverAddressMutation';
import { putDeliverAddressType } from "@/types/deliverAddress";
import { AiFillCheckCircle } from 'react-icons/ai';
import { RiAlarmWarningFill } from 'react-icons/ri';

type propsType = {
  user_id: string,
  addressInfo: string,
  labelInfo: string,
  addressType: string,
}

const UserDeliverAddressPart = ({addressInfo, labelInfo, addressType, user_id}: propsType) => {
  const [dialog, setDialog] = useState(false);
  const [address, setAddress] = useState(addressInfo);
  const inputRef = useRef<HTMLInputElement>(null);
  const { isLoading, isError, isSuccess, error, mutate} = useDeliverAddressMutation({
    user_id: user_id, 
    address_info: address, 
    address_type: addressType} as putDeliverAddressType);
  useEffect(() => {
    if (!inputRef.current)
      return;
    inputRef.current.value = addressInfo;
  });
  const onCompletePost = (data: any) => {
    setAddress(data.address);
    setDialog(false);
    mutate();
  }; // onCompletePost 함수
  const modifyAddressInfo = () => {
    if (!inputRef.current)
      return;
    setAddress(inputRef.current.value);
    mutate();
  }
  return (
    <>
      {
        dialog && 
        <div className={styles.dialog_background}>
          <div style={{
            width: '400px'
          }}>
            <button type='button' onClick={() => setDialog(false)} className={styles.postcode_button}>닫기</button>
          </div>
          <DaumPostcode
            onClose={() => setDialog(false)}
            style={{
              width: '400px',
              height: '400px',
            }}
            onComplete={onCompletePost}
          ></DaumPostcode>
        </div>
      }
      <div className={styles.user_deliver_address_container}>
        <p className={styles.deliver_address_label}>
          {
            labelInfo
          }
        </p>
        {
          !(addressType === 'address')
          ? <input 
              ref={inputRef}
              type="text"
              role={addressType}/>
          : <p role='address'>{addressInfo}</p>
        }
        {
          !(addressType === 'address') 
          ? <button className={styles.modify_button} onClick={() => modifyAddressInfo()}>
              <BsFillPencilFill size={30}></BsFillPencilFill>
            </button>
          : <button 
              className={styles.address_search_button} 
              onClick={() => setDialog(true)}>주소검색</button>
        }
        <>
          {
            isLoading && 
            <div className={styles.mutation_handle_box}>
              <div className={styles.loading}></div>
            </div>
          }
          {
            isError && 
            <div className={styles.mutation_handle_box}>
              <div className={styles.state_cover}>
                <RiAlarmWarningFill size={25} color='red'></RiAlarmWarningFill>
              </div>
              {(error as Error)?.message}
            </div>
          }
          {
            isSuccess && 
            <div className={styles.mutation_handle_box}>
              <div className={styles.state_cover}>
                <AiFillCheckCircle size={25} color='green'></AiFillCheckCircle>
              </div>
              변경 성공!
            </div>
          }
        </>
      </div>
    </>
  );
};

export default UserDeliverAddressPart;