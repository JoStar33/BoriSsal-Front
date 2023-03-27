import { Dispatch, SetStateAction, useRef } from "react";

interface IProps {
  setAdminPass: Dispatch<SetStateAction<boolean>>
}

const AdminChecker = ({ setAdminPass }: IProps) => {
  const adminKeyRef = useRef<HTMLInputElement>(null)
  const handleAdminPass = () => {
    if(!adminKeyRef.current)
      return;
    if(process.env.NEXT_PUBLIC_ADDMIN_KEY === adminKeyRef.current.value)
      setAdminPass(true);
  }
  return (
    <div>
      <h1>어드민 키 입력</h1>
      <input ref={adminKeyRef} type="password" />
      <button onClick={() => handleAdminPass()}>확인하기</button>
    </div>
  );
};

export default AdminChecker;