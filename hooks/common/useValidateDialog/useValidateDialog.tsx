import ValidateDialog from "@/components/dialogs/ValidateDialog/ValidateDialog";
import { useState } from "react";

export const useValidateDialog = () => {
  const [dialog, setDialog] = useState<boolean>(false);
  const [dialogText, setDialogText] = useState<string>("");
  const renderDialog =() => (
    <ValidateDialog
      setDialog={setDialog}
      text={dialogText}
    ></ValidateDialog>
  );
  return { dialog, setDialog, dialogText, setDialogText, renderDialog }
}