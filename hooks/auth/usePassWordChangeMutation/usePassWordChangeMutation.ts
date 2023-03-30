import { passwordChange } from "@/apis/user/auth";
import { IPostPasswordInfo } from "@/types/auth";
import { Dispatch, SetStateAction } from "react";
import { useMutation } from "react-query";
import { errorMessage } from './../../../apis/error/customError';

export const usePassWordChangeMutation = (
  { password, newPassword }: IPostPasswordInfo,
  setDialog: Dispatch<SetStateAction<boolean>>,
  setDialogText: Dispatch<SetStateAction<string>>,
  setSuccessDialog: Dispatch<SetStateAction<boolean>>,
  setSuccessDialogText: Dispatch<SetStateAction<string>>
) => {
  return useMutation(() => passwordChange(password, newPassword), {
    onSuccess: () => {
      setSuccessDialog(true)
      setSuccessDialogText("비밀번호 변경 성공!")
    },
    onError: (error) => {
      setDialog(true);
      setDialogText(errorMessage(error))
    }
  });
};
