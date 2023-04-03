import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";
import { Dispatch, SetStateAction, useRef } from "react";
import styles from './admin_checker.module.scss';

interface IProps {
  setAdminPass: Dispatch<SetStateAction<boolean>>
}

const AdminChecker = ({ setAdminPass }: IProps) => {
  const adminKeyRef = useRef<HTMLInputElement>(null);
  const { dialog, setDialog, dialogText, renderDialog } = useValidateDialog();
  const handleAdminPass = () => {
    if(!adminKeyRef.current)
      return;
    if(process.env.NEXT_PUBLIC_ADMIN_KEY !== adminKeyRef.current.value) {
      dialogText.current = "어드민 키가 일치하지 않습니다. 다시 확인해주세요."
      setDialog(true);
      return;
    }
    setAdminPass(true);
  }
  return (
    <> 
      {
        dialog && renderDialog()
      }
      <div className={styles.admin_checker_container}>
        <h1>어드민 키 입력</h1>
        <input ref={adminKeyRef} type="password" />
        <button onClick={() => handleAdminPass()}>확인하기</button>
      </div>
    </>
  );
};

export default AdminChecker;