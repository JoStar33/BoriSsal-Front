import React from 'react';
import styles from './success_dialog.module.scss'
import { GrClose } from 'react-icons/gr';
import Image from 'next/image';
import success_bori from '/public/dialog/success_bori.png'
import success from '/public/dialog/success.png'


type propsType = {
  text: string;
  setDialog?: React.Dispatch<React.SetStateAction<boolean>> | any
}

const SuccessDialog = ({text, setDialog}: propsType) => {
  return (
    <div className={styles.dialog_background}>
      <div className={styles.dialog_container}>
        <div className={styles.default_close_button} onClick={() => setDialog(false)}>
          <GrClose size={30}></GrClose>
        </div>
        <Image
          alt=''
          className={styles.dialog_success}
          src={success}
          width={60}
          height={60} ></Image>
        <Image
          width={80}
          className={styles.dialog_bori}
          height={100}
          src={success_bori}
          alt=''></Image>
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default SuccessDialog;