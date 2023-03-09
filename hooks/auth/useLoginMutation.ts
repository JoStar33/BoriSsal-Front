import { useMutation } from "react-query";
import { login } from "@/apis/user/auth";
import { useRouter } from 'next/router';
import { loginType } from "@/types/auth";
import { setUserState } from "@/store/user";
import { userType } from "@/types/user";
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
        nick: res.data.nick,
        sns_id: res.data.sns_id,
        profile_image: res.data.profile_image,
        user_role: res.data.user_role,
        created_at: res.data.created_at,
        user_product_like: res.data.user_product_like,
        user_bori_gallery_like: res.data.user_bori_gallery_like,
      } as userType));
      router.push("/");
    },
    onError: (error: AxiosError) => {
      setDialogText(error.message);
      setDialog(true);
    }
  });
};

