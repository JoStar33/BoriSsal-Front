import SuccessDialog from "@/components/dialogs/SuccessDialog/SuccessDialog";
import { useDialogStore } from "@/store/dialog";

export const useSuccessDialog = () => {
  const { successDialog, successDialogText, setSuccessDialog, setSuccessDialogText } = useDialogStore();
  const renderSuccessDialog =() => (
    <SuccessDialog
      dialog={successDialog}
      setDialog={setSuccessDialog}
      text={successDialogText}
    />
  );
  return { successDialog, setSuccessDialog, setSuccessDialogText, renderSuccessDialog }
}