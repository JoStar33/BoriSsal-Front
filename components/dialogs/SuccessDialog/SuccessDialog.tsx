import React from 'react';
import styles from './success_dialog.module.scss'
import Image from 'next/image';
import success_bori from '/public/dialog/success_bori.png'
import success from '/public/dialog/success.png'
import { GrClose } from 'react-icons/gr';


type propsType = {
  text: string;
  setDialog?: React.Dispatch<React.SetStateAction<boolean>> | any
}

const SuccessDialog = ({text, setDialog}: propsType) => {
  return (
    <div className={styles.dialog_background}>
      <div role='success' className={styles.dialog_container}>
        {
          setDialog && 
          <div className={styles.default_close_button} onClick={() => setDialog(false)}>
            <GrClose size={30}></GrClose>
          </div>
        }
        <Image
          alt='성공 빵빠레'
          className={styles.dialog_success}
          src={success}
          width={60}
          height={60} ></Image>
        <Image
          width={80}
          className={styles.dialog_bori}
          height={100}
          src={success_bori}
          alt='성공 보리'></Image>
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default SuccessDialog;