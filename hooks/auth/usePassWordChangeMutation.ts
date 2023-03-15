import { useMutation } from "react-query";
import { passwordChange } from "@/apis/user/auth";

type propsType = {
  password: string;
  newPassword: string;
  id: string;
};

export const usePassWordChangeMutation = ({
  password,
  newPassword,
  id,
}: propsType) => {
  return useMutation(() => passwordChange(id, password, newPassword));
};
