import { isNotLoggedIn } from "@/apis/user/auth";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export const useNotLoginCheckQuery = () => {
  const router = useRouter();
  return useQuery(["is-not-login"], () => isNotLoggedIn(), {
    onError: () => {
      router.push("/");
    },
    retry: 0,
  });
};
