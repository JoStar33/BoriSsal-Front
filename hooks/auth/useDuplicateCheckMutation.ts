import { useMutation } from "react-query";
import { emailDuplicate, nickDuplicate } from "@/apis/user/auth";

interface propsType {
  type: boolean;
  info: string;
}

export const useDuplicateCheckMutation = ({
  type,
  info
}: propsType) => {
  return useMutation(() => type ? emailDuplicate(info) : nickDuplicate(info));
}