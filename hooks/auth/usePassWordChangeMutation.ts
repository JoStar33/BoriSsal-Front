import { useMutation } from "react-query";
import { passwordChange } from "@/apis/user/auth";

interface IProps {
  password: string;
  newPassword: string;
  id: string;
};

export const usePassWordChangeMutation = ({
  password,
  newPassword,
  id,
}: IProps) => {
  return useMutation(() => passwordChange(id, password, newPassword));
};
