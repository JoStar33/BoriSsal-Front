import { findPassword } from "@/apis/user/auth";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { useMutation } from "react-query";
import { errorMessage } from './../../../apis/error/customError';

export const useFindPassWordMutation = (
  email: string,
  setDialog: Dispatch<SetStateAction<boolean>>,
  setDialogText: Dispatch<SetStateAction<string>>,
  setSuccessDialog: Dispatch<SetStateAction<boolean>>,
  setSuccessDialogText: Dispatch<SetStateAction<string>>
) => {
  const router = useRouter();
  return useMutation(() => findPassword(email), {
    onSuccess: () => {
      setSuccessDialog(true);
      setSuccessDialogText("임시비밀번호가 메일로 전송됐습니다!")
      setTimeout(() => {
        router.push("/");
      }, 2000);
    },
    onError: (error) => {
      setDialog(true);
      setDialogText(errorMessage(error));
    },
  });
};
