import ValidateDialog from "@/components/dialogs/ValidateDialog/ValidateDialog";
import { useRef, useState } from "react";

export const useValidateDialog = () => {
  const [dialog, setDialog] = useState<boolean>(false);
  const dialogText = useRef<string>("");
  const renderDialog =() => (
    <ValidateDialog
      setDialog={setDialog}
      text={dialogText.current}
    ></ValidateDialog>
  );
  return { dialog, setDialog, dialogText, renderDialog }
}