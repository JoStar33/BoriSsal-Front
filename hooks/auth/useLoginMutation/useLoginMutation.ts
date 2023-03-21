import { useMutation } from "react-query";
import { login } from "@/apis/user/auth";
import { useRouter } from "next/router";
import { ILogin } from "@/types/auth";
import { setUserState } from "@/store/user";
import { IUser } from "@/types/user";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { AxiosError } from "axios";
import { errorMessage } from "@/apis/error/customError";

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
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  return useMutation(() => login(loginInfo.email, loginInfo.password), {
    onSuccess: (res) => {
      const loginUser: IUser = {
        id: res.data._id,
        email: res.data.email,
        nick: res.data.nick,
        sns_id: res.data.sns_id,
        profile_image: res.data.profile_image,
        user_role: res.data.user_role,
        created_at: res.data.created_at,
        user_bori_goods_like: res.data.user_bori_goods_like,
        user_bori_gallery_like: res.data.user_bori_gallery_like,
      } 
      dispatch(
        setUserState(loginUser)
      );
      router.push("/");
    },
    onError: (error: AxiosError) => {
      setDialogText(errorMessage(error));
      setDialog(true);
    },
  });
};
