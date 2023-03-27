import { logout } from "@/apis/user/auth";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";

export const useLogoutMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation(() => logout(), {
    onSuccess() {
      queryClient.invalidateQueries("user");
      router.push("/");
    }
  });
};
