import { passwordChange } from "@/apis/user/auth";
import { IPostPasswordInfo } from "@/types/auth";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { useMutation } from "react-query";
import { errorMessage } from './../../../apis/error/customError';

export const usePassWordChangeMutation = (
  { password, newPassword }: IPostPasswordInfo,
  setDialog: Dispatch<SetStateAction<boolean>>,
  dialogText: MutableRefObject<string>,
  setSuccessDialog: Dispatch<SetStateAction<boolean>>,
  successDialogText: MutableRefObject<string>
) => {
  return useMutation(() => passwordChange(password, newPassword), {
    onSuccess: () => {
      setSuccessDialog(true)
      successDialogText.current = "비밀번호 변경 성공!"
    },
    onError: (error) => {
      setDialog(true);
      dialogText.current = errorMessage(error)
    }
  });
};
