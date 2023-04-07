import { useSuccessDialog } from "@/hooks/common/useSuccessDialog/useSuccessDialog";
import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";

const StatusContainer = () => {
  const { renderDialog} = useValidateDialog();
  const { renderSuccessDialog } = useSuccessDialog();
  return (
    <>
      {
        renderDialog()
      }
      {
        renderSuccessDialog()
      }
    </>
  );
};

export default StatusContainer;