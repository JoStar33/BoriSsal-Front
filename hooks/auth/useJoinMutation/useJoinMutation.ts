import { errorMessage } from "@/apis/error/customError";
import { join } from "@/apis/user/auth";
import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";
import { IJoin } from "@/types/auth";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

interface IProps {
  joinInfo: IJoin;
};

export const useJoinMutation = ({
  joinInfo
}: IProps) => {
  const { setDialog, setDialogText } = useValidateDialog();
  const router = useRouter();
  return useMutation(
    () => join(joinInfo.email, joinInfo.nick, joinInfo.password),
    {
      onSuccess: () => {
        router.push("/");
      },
      onError: (error: AxiosError) => {
        setDialogText(errorMessage(error));
        setDialog(true);
      },
    }
  );
};
