import React from 'react';
import styles from './validate_dialog.module.scss'
import { GrClose } from 'react-icons/gr';
import Image from 'next/image';
import question_bori from '/public/dialog/question_bori.png'
import question from '/public/dialog/question.png'


type propsType = {
  text: string;
  setDialog?: React.Dispatch<React.SetStateAction<boolean>> | any
}

const ValidateDialog = ({text, setDialog}: propsType) => {
  return (
    <div className={styles.dialog_background}>
      <div className={styles.dialog_container}>
        <div className={styles.default_close_button} onClick={() => setDialog(false)}>
          <GrClose size={30}></GrClose>
        </div>
        <Image
          width={50}
          className={styles.dialog_bori}
          height={100}
          src={question_bori}
          alt=''></Image>
        <Image
          width={40}
          className={styles.dialog_question}
          height={40}
          src={question}
          alt=''></Image>
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default ValidateDialog;