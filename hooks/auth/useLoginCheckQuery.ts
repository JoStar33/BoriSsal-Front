import { useQuery } from "react-query";
import { isLoggedIn } from "@/apis/user/auth";
import { useRouter } from "next/router";
import { resetUserState } from "@/store/user";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

export const useLoginCheckQuery = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  return useQuery(['is-login'], () => isLoggedIn(), {
    onError: () => {
      dispatch(resetUserState());
      router.push("/login");
    }
  });
};
