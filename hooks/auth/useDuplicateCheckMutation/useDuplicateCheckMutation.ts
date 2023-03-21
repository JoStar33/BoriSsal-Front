import { useMutation } from "react-query";
import { emailDuplicate, nickDuplicate } from "@/apis/user/auth";

interface IProps {
  type: boolean;
  info: string;
}

export const useDuplicateCheckMutation = ({
  type,
  info
}: IProps) => {
  return useMutation(() => type ? emailDuplicate(info) : nickDuplicate(info));
}