import AdminChecker from "@/components/admin/AdminChecker/AdminChecker";
import AdminViewer from "@/components/admin/AdminViewer/AdminViewer";
import { useLoginCheckQuery } from "@/hooks/auth/useLoginCheckQuery/useLoginCheckQuery";
import { useState } from "react";

const AdminPage = () => {
  useLoginCheckQuery();
  const [adminPass, setAdminPass] = useState<boolean>(false);
  return (
    <div>
      {
        adminPass 
        ? <AdminViewer/>
        : <AdminChecker setAdminPass={setAdminPass}/>
      }
    </div>
  );
};

export default AdminPage;