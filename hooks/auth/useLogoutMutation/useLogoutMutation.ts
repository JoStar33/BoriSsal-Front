import { logout } from "@/apis/user/auth";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { useMutation, useQueryClient } from "react-query";
import { errorMessage } from './../../../apis/error/customError';

export const useLogoutMutation = (
  setDialog: Dispatch<SetStateAction<boolean>>,
  setDialogText: Dispatch<SetStateAction<string>>
) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation(() => logout(), {
    onSuccess() {
      queryClient.invalidateQueries("user");
      router.push("/");
    },
    onError: (error) => {
      setDialog(true);
      setDialogText(errorMessage(error));
    }
  });
};
