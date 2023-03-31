import { errorMessage } from "@/apis/error/customError";
import { login } from "@/apis/user/auth";
import { ILogin } from "@/types/auth";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { MutableRefObject } from "react";
import { useMutation, useQueryClient } from "react-query";

interface IProps {
  setDialog: React.Dispatch<React.SetStateAction<boolean>>;
  dialogText: MutableRefObject<string>;
  loginInfo: ILogin;
};

export const useLoginMutation = ({
  loginInfo,
  setDialog,
  dialogText,
}: IProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation(() => login(loginInfo.email, loginInfo.password), {
    onSuccess: (res) => {
      queryClient.invalidateQueries("user");
      router.push("/");
    },
    onError: (error: AxiosError) => {
      dialogText.current = errorMessage(error);
      setDialog(true);
    },
  });
};
