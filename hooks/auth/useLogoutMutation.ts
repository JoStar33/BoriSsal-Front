import { useMutation } from "react-query";
import { logout } from "@/apis/user/auth";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { resetUserState } from "@/store/user";

export const useLogoutMutation = () => {
  const dispatch = useDispatch<AppDispatch>();
  return useMutation(() => logout(), {
    onSuccess() {
      dispatch(resetUserState());
    },
  });
};
