import DeliverPartSkeleton from '@/components/loading/DeliverPartSkeleton/DeliverPartSkeleton';
import { IDeliverAddress } from '@/types/deliverAddress';
import Image from 'next/image';
import React from 'react';
import UserDeliverAddressPart from '../UserDeliverAddressPart/UserDeliverAddressPart';
import styles from './user_deliver_address_viewer.module.scss';
import error_bori from '/public/404/404_bori.png';

interface IProps {
  deliverAddress: IDeliverAddress;
  isLoading: boolean;
  isError: boolean;
}

const UserDeliverAddressViewer = ({deliverAddress, isLoading, isError}: IProps) => {
  if (isLoading)
    return (
      isLoading && 
      <div className={styles.user_deliver_address}>
        {
          new Array(3)
          .fill(1)
          .map((_, index) => (
            <DeliverPartSkeleton key={index}/>
          ))
        }
      </div>
  );
  if (isError) 
    return (
      <div className={styles.user_deliver_address}>
        <figure style={{width: '14vw', height: '14vw', position: 'relative'}}>
          <Image src={error_bori} alt='서버상의 오류 발생'></Image>
        </figure>
        <p>
          죄송합니다. 서버상의 오류로 정보를 못 가져왔어요.
        </p>
      </div>
  );
  return (
    <div className={styles.user_deliver_address}>
      <h1>배송정보 변경</h1>
      <UserDeliverAddressPart
        addressInfo={deliverAddress.phone_number}
        addressType="phone_number"
        labelInfo="전화번호: "
      />
      <UserDeliverAddressPart
        addressInfo={deliverAddress.address}
        addressType="address"
        labelInfo="주소: "
      />
      <UserDeliverAddressPart
        addressInfo={deliverAddress.address_detail}
        addressType="address_detail"
        labelInfo="상세주소: "
      />
    </div>
  );
};

export default UserDeliverAddressViewer;