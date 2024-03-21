import Image from 'next/image';
import { GrClose } from 'react-icons/gr';
import styles from './success_dialog.module.scss';
import success from '/public/dialog/success.png';
import success_bori from '/public/dialog/success_bori.png';

interface IProps {
  dialog: boolean;
  text: string;
  setDialog: (payload: boolean) => void;
}

const SuccessDialog = ({ text, setDialog, dialog }: IProps) => {
  return (
    <>
      {dialog && (
        <div className={styles.dialog_background}>
          <div role="success" className={styles.dialog_container}>
            {setDialog && (
              <div className={styles.default_close_button} onClick={() => setDialog(false)}>
                <GrClose size={30} />
              </div>
            )}
            <Image alt="성공 빵빠레" className={styles.dialog_success} src={success} width={60} height={60} />
            <Image width={80} className={styles.dialog_bori} height={100} src={success_bori} alt="성공 보리" />
            <h2>{text}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessDialog;
