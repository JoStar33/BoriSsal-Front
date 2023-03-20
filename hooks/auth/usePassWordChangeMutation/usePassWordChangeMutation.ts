import { useMutation } from "react-query";
import { passwordChange } from "@/apis/user/auth";
import { IPostPasswordInfo } from "@/types/auth";

export const usePassWordChangeMutation = ({
  password,
  newPassword,
  id,
}: IPostPasswordInfo) => {
  return useMutation(() => passwordChange(id, password, newPassword));
};
