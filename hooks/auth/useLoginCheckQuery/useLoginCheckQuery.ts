import { errorMessage } from "@/apis/error/customError";
import { isLoggedIn } from "@/apis/user/auth";
import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export const useLoginCheckQuery = () => {
  const { setDialog, setDialogText } = useValidateDialog();
  const router = useRouter();
  return useQuery(["is-login"], () => isLoggedIn(), {
    onError: (error) => {
      setDialog(true);
      setDialogText(errorMessage(error));
      router.push("/login");
    },
    retry: 0,
  });
};
