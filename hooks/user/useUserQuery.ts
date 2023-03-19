import { useQuery } from "react-query";
import { userType } from "@/types/user";
import { getUser } from "@/apis/user/user";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { setUserState } from "@/store/user";
import { getParam } from "@/utils/getParam";
import { errorMessage } from "@/apis/error/customError";

type propsType = {
  setDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setDialogText: React.Dispatch<React.SetStateAction<string>>;
};

export const useUserQuery = ({ setDialog, setDialogText }: propsType) => {
  const router = useRouter();
  const id = getParam();
  if(id === '비어있음.') {
    router.push("/");
  }
  const dispatch = useDispatch<AppDispatch>();
  return useQuery(["user"], () => getUser(id), {
    onSuccess: (res) => {
      const loginUser: userType = {
        id: res.data._id,
        email: res.data.email,
        nick: res.data.nick,
        sns_id: res.data.sns_id,
        profile_image: res.data.profile_image,
        user_role: res.data.user_role,
        created_at: res.data.created_at,
        user_product_like: res.data.user_product_like,
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
