import { logout } from "@/apis/user/auth";
import { useRouter } from "next/router";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { useMutation, useQueryClient } from "react-query";
import { errorMessage } from './../../../apis/error/customError';

export const useLogoutMutation = (
  setDialog: Dispatch<SetStateAction<boolean>>,
  dialogText: MutableRefObject<string>
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
      dialogText.current = errorMessage(error);
    }
  });
};
