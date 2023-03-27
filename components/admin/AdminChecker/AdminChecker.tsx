import { Dispatch, SetStateAction, useRef } from "react";
import styles from './admin_checker.module.scss';

interface IProps {
  setAdminPass: Dispatch<SetStateAction<boolean>>
}

const AdminChecker = ({ setAdminPass }: IProps) => {
  const adminKeyRef = useRef<HTMLInputElement>(null)
  const handleAdminPass = () => {
    if(!adminKeyRef.current)
      return;
    if(process.env.NEXT_PUBLIC_ADMIN_KEY === adminKeyRef.current.value)
      setAdminPass(true);
  }
  return (
    <div className={styles.admin_checker_container}>
      <h1>어드민 키 입력</h1>
      <input ref={adminKeyRef} type="password" />
      <button onClick={() => handleAdminPass()}>확인하기</button>
    </div>
  );
};

export default AdminChecker;