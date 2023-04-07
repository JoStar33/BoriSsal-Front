import { logout } from "@/apis/user/auth";
import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { errorMessage } from './../../../apis/error/customError';

export const useLogoutMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setDialog, setDialogText } = useValidateDialog();
  return useMutation(() => logout(), {
    onSuccess() {
      queryClient.setQueryData("user", null);
      queryClient.invalidateQueries("user");
      router.push("/");
    },
    onError: (error: AxiosError) => {
      setDialogText(errorMessage(error));
      setDialog(true);
    },
  });
};
