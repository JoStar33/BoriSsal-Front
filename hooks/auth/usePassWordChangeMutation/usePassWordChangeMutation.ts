import { useMutation } from "react-query";
import { passwordChange } from "@/apis/user/auth";
import { IPostPasswordInfo } from "@/types/auth";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const usePassWordChangeMutation = ({
  password,
  newPassword,
}: IPostPasswordInfo) => {
  const { user } = useSelector((state: RootState) => state.userStore);
  return useMutation(() => passwordChange(user.id, password, newPassword));
};
