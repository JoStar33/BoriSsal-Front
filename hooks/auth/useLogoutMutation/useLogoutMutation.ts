import { logout } from "@/apis/user/auth";
import { useUserStore } from "@/store/user";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

export const useLogoutMutation = () => {
  const { resetUser } = useUserStore();
  const router = useRouter();
  return useMutation(() => logout(), {
    onSuccess() {
      resetUser();
      router.push("/");
    },
  });
};
