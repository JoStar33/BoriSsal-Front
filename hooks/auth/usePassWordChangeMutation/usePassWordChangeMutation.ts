import { passwordChange } from "@/apis/user/auth";
import { useUserStore } from "@/store/user";
import { IPostPasswordInfo } from "@/types/auth";
import { useMutation } from "react-query";

export const usePassWordChangeMutation = ({
  password,
  newPassword,
}: IPostPasswordInfo) => {
  const { user } = useUserStore();
  return useMutation(() => passwordChange(user.id, password, newPassword));
};
