import SuccessDialog from "@/components/dialogs/SuccessDialog/SuccessDialog";
import { useRef, useState } from "react";

export const useSuccessDialog = () => {
  const [successDialog, setSuccessDialog] = useState<boolean>(false);
  const successDialogText = useRef<string>("");
  const renderSuccessDialog =() => (
    <SuccessDialog
      setDialog={setSuccessDialog}
      text={successDialogText.current}
    />
  );
  return { successDialog, setSuccessDialog, successDialogText, renderSuccessDialog }
}