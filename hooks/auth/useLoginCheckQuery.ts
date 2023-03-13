import { useQuery } from "react-query";
import { isLoggedIn } from "@/apis/user/auth";
import { useRouter } from "next/router";

export const useLoginCheckQuery = () => {
  const router = useRouter();
  return useQuery(['is-login'], () => isLoggedIn(), {
    onError: () => {
      router.push("/");
    }
  });
};
