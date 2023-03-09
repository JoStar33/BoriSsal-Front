import React, { useEffect, useRef, useState } from 'react';
import { BsFillPencilFill, BsCheckLg } from 'react-icons/bs';
import styles from './user_deliver_address_part.module.scss';

type propsType = {
  addressInfo: string,
  labelInfo: string,
  isAddress?: boolean,
}

const UserDeliverAddressPart = ({addressInfo, labelInfo, isAddress}: propsType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!inputRef.current)
      return;
    inputRef.current.value = addressInfo;
  });
  const modifyAddressInfo = () => {
    
  }
  return (
    <div className={styles.user_deliver_address_container}>
      <p className={styles.deliver_address_label}>
        {
          labelInfo
        }
      </p>
      {
        !isAddress 
        ? <input ref={inputRef} type="text"/>
        : <p>{addressInfo}</p>
      }
      {
        !isAddress 
        ? <button className={styles.modify_button} onClick={() => modifyAddressInfo()}>
            <BsFillPencilFill size={30}></BsFillPencilFill>
          </button>
        : <button className={styles.address_search_button}>주소검색</button>
      }
    </div>
  );
};

export default UserDeliverAddressPart;