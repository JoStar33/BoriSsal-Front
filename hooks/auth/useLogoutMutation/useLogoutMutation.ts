import { useMutation } from "react-query";
import { logout } from "@/apis/user/auth";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { resetUserState } from "@/store/user";
import { useRouter } from "next/router";

export const useLogoutMutation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  return useMutation(() => logout(), {
    onSuccess() {
      dispatch(resetUserState());
      router.push("/");
    },
  });
};
