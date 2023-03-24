import { errorMessage } from "@/apis/error/customError";
import { login } from "@/apis/user/auth";
import { useUserStore } from "@/store/user";
import { ILogin } from "@/types/auth";
import { IUser } from "@/types/user";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

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
  const router = useRouter();
  const { setUser } = useUserStore();
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
      setUser(loginUser);
      router.push("/");
    },
    onError: (error: AxiosError) => {
      setDialogText(errorMessage(error));
      setDialog(true);
    },
  });
};
