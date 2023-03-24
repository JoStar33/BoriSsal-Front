import { isNotLoggedIn } from "@/apis/user/auth";
import { useUserStore } from '@/store/user';
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export const useNotLoginCheckQuery = () => {
  const { resetUser } = useUserStore();
  const router = useRouter();
  return useQuery(["is-not-login"], () => isNotLoggedIn(), {
    onSuccess: () => {
      resetUser();
    },
    onError: () => {
      router.push("/");
    },
    retry: 0,
  });
};
