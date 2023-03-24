import { isLoggedIn } from "@/apis/user/auth";
import { useUserStore } from '@/store/user';
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export const useLoginCheckQuery = () => {
  const router = useRouter();
  const {resetUser} = useUserStore();
  return useQuery(["is-login"], () => isLoggedIn(), {
    onError: () => {
      resetUser();
      router.push("/login");
    },
    retry: 0,
  });
};
