import { useMutation } from "react-query";
import { join } from "@/apis/user/auth";
import { useRouter } from 'next/router';
import { joinType } from "@/types/user";


export const useJoinMutation = ({
  email,
  nick,
  password
}: joinType) => {
  const router = useRouter();
  return useMutation(() => join(email, nick, password), {
    onSuccess: () => {
      router.push("/");
    },
  });
};