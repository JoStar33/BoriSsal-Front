import { passwordChange } from "@/apis/user/auth";
import { IPostPasswordInfo } from "@/types/auth";
import { useMutation } from "react-query";

export const usePassWordChangeMutation = ({
  password,
  newPassword,
}: IPostPasswordInfo) => {
  return useMutation(() => passwordChange(password, newPassword));
};
