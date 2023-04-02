import { findPassword } from "@/apis/user/auth";
import { useRouter } from "next/router";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { useMutation } from "react-query";
import { errorMessage } from './../../../apis/error/customError';

export const useFindPassWordMutation = (
  email: string,
  setDialog: Dispatch<SetStateAction<boolean>>,
  dialogText: MutableRefObject<string>,
  setSuccessDialog: Dispatch<SetStateAction<boolean>>,
  successDialogText: MutableRefObject<string>
) => {
  const router = useRouter();
  return useMutation(() => findPassword(email), {
    onSuccess: () => {
      setSuccessDialog(true);
      successDialogText.current = "임시비밀번호가 메일로 전송됐습니다!";
      setTimeout(() => {
        router.push("/");
      }, 2000);
    },
    onError: (error) => {
      setDialog(true);
      dialogText.current = errorMessage(error);
    },
  });
};
