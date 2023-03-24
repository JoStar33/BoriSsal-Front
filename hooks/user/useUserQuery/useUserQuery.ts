import { errorMessage } from "@/apis/error/customError";
import { getUser } from "@/apis/user/user";
import { useUserStore } from "@/store/user";
import { IUser } from "@/types/user";
import { getParam } from "@/utils/getParam";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef } from 'react';
import { useQuery } from "react-query";

interface IProps {
  setDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setDialogText: React.Dispatch<React.SetStateAction<string>>;
};

export const useUserQuery = ({ setDialog, setDialogText }: IProps) => {
  const id = useRef<string>('')
  const { setUser } = useUserStore();
  const router = useRouter();
  useEffect(() => {
    id.current = getParam();
    if(id.current === '비어있음.') {
      router.push("/");
    }
  });
  return useQuery(["user"], () => getUser(id.current), {
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
