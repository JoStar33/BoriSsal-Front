import SuccessDialog from "@/components/dialogs/SuccessDialog/SuccessDialog";
import { useState } from "react";

export const useSuccessDialog = () => {
  const [successDialog, setSuccessDialog] = useState<boolean>(false);
  const [successDialogText, setSuccessDialogText] = useState<string>("");
  const renderSuccessDialog =() => (
    <SuccessDialog
      setDialog={setSuccessDialog}
      text={successDialogText}
    />
  );
  return { successDialog, setSuccessDialog, successDialogText, setSuccessDialogText, renderSuccessDialog }
}