import { useMutation } from "react-query";
import { passwordChange } from "@/apis/user/auth";

type propsType = {
  password: string,
  newPassword: string
}

export const usePassWordChangeMutation = ({
  password,
  newPassword
}: propsType) => {
  return useMutation(() => passwordChange(password, newPassword));
};

