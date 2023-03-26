import { isLoggedIn } from "@/apis/user/auth";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export const useLoginCheckQuery = () => {
  const router = useRouter();
  return useQuery(["is-login"], () => isLoggedIn(), {
    onError: () => {
      router.push("/login");
    },
    retry: 0,
  });
};
