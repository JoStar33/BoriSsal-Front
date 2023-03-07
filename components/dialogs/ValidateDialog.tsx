import React from 'react';
import styles from './validate_dialog.module.scss'
import { GrClose } from 'react-icons/gr';

type propsType = {
  text: string;
  setDialog: React.Dispatch<React.SetStateAction<boolean>>
}

const ValidateDialog = ({text, setDialog}: propsType) => {
  return (
    <div className={styles.dialog_background}>
      <div className={styles.dialog_container}>
        <div className={styles.default_close_button} onClick={() => setDialog(false)}>
          <GrClose size={30}></GrClose>
        </div>
        <h2 className={styles.default_close_button}>{text}</h2>
      </div>
    </div>
  );
};

export default ValidateDialog;