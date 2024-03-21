import ValidateDialog from '@/components/dialogs/ValidateDialog/ValidateDialog';
import { useDialogStore } from '@/store/dialog';

export const useValidateDialog = () => {
  const { dialog, dialogText, setDialog, setDialogText } = useDialogStore();
  const renderDialog = () => <ValidateDialog dialog={dialog} setDialog={setDialog} text={dialogText} />;
  return { dialog, setDialog, renderDialog, setDialogText };
};
