import { passwordChange } from "@/apis/user/auth";
import { useSuccessDialog } from "@/hooks/common/useSuccessDialog/useSuccessDialog";
import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";
import { IPostPasswordInfo } from "@/types/auth";
import { useMutation } from "react-query";
import { errorMessage } from './../../../apis/error/customError';

export const usePassWordChangeMutation = (
  { password, newPassword }: IPostPasswordInfo
) => {
  const { setDialog, setDialogText } = useValidateDialog();
  const { setSuccessDialog, setSuccessDialogText } = useSuccessDialog();
  return useMutation(() => passwordChange(password, newPassword), {
    onSuccess: () => {
      setSuccessDialog(true)
      setSuccessDialogText("비밀번호 변경 성공!");
    },
    onError: (error) => {
      setDialog(true);
      setDialogText(errorMessage(error));
    }
  });
};
