import AdminChecker from "@/components/admin/AdminChecker/AdminChecker";
import AdminViewer from "@/components/admin/AdminViewer/AdminViewer";
import { useLoginCheckQuery } from "@/hooks/auth/useLoginCheckQuery/useLoginCheckQuery";
import { useState } from "react";
import styles from './admin_page.module.scss';

const AdminPage = () => {
  useLoginCheckQuery();
  const [adminPass, setAdminPass] = useState<boolean>(false);
  return (
    <div className={styles.admin_page_container}>
      {
        adminPass 
        ? <AdminViewer/>
        : <AdminChecker setAdminPass={setAdminPass}/>
      }
    </div>
  );
};

export default AdminPage;