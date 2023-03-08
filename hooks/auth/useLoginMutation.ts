import { useMutation } from "react-query";
import { login } from "@/apis/user/auth";
import { useRouter } from 'next/router';
import { loginType } from "@/types/auth";
import { setUserState } from "@/store/user";
import { userInfo } from "@/types/user";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { AxiosError } from "axios";

type propsType = {
  setDialog: React.Dispatch<React.SetStateAction<boolean>>,
  setDialogText: React.Dispatch<React.SetStateAction<string>>,
  loginInfo: loginType
}

export const useLoginMutation = ({
  loginInfo,
  setDialog,
  setDialogText
}: propsType) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  return useMutation(() => login(loginInfo.email, loginInfo.password), {
    onSuccess: (res) => {
      dispatch(setUserState({
        id: res.data._id,
        email: res.data.email,
        nick: res.data.nick
      } as userInfo));
      router.push("/");
    },
    onError: (error: AxiosError) => {
      setDialogText(error.message);
      setDialog(true)
    }
  });
};

