import { useRouter } from 'next/router';
import { useMutation } from "react-query";
import { findPassword } from "@/apis/user/auth";

export const useFindPassWordMutation = (email: string) =>{
  const router = useRouter();
  return useMutation(() => findPassword(email), {
    onSuccess() {
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  });
};