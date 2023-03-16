import { useQuery } from "react-query";
import { isNotLoggedIn } from "@/apis/user/auth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { resetUserState } from "@/store/user";

export const useNotLoginCheckQuery = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  return useQuery(["is-not-login"], () => isNotLoggedIn(), {
    onSuccess: () => {
      dispatch(resetUserState());
    },
    onError: () => {
      router.push("/");
    },
    retry: 0,
  });
};
