import { errorMessage } from "@/apis/error/customError";
import { login } from "@/apis/user/auth";
import { ILogin } from "@/types/auth";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";

interface IProps {
  setDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setDialogText: React.Dispatch<React.SetStateAction<string>>;
  loginInfo: ILogin;
};

export const useLoginMutation = ({
  loginInfo,
  setDialog,
  setDialogText,
}: IProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation(() => login(loginInfo.email, loginInfo.password), {
    onSuccess: (res) => {
      queryClient.invalidateQueries("user");
      router.push("/");
    },
    onError: (error: AxiosError) => {
      setDialogText(errorMessage(error));
      setDialog(true);
    },
  });
};
