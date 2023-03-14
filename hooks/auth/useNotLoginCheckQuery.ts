import { useQuery } from "react-query";
import { isNotLoggedIn } from "@/apis/user/auth";
import { useRouter } from "next/router";

export const useNotLoginCheckQuery = () => {
  const router = useRouter();
  return useQuery(['is-not-login'], () => isNotLoggedIn(), {
    onError: () => {
      router.push("/");
    }
  });
};
