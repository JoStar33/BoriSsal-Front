import { useMutation } from "react-query";
import { join } from "@/apis/user/auth";
import { useRouter } from "next/router";
import { IJoin } from "@/types/auth";
import { AxiosError } from "axios";
import { errorMessage } from "@/apis/error/customError";

interface IProps {
  setDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setDialogText: React.Dispatch<React.SetStateAction<string>>;
  joinInfo: IJoin;
};

export const useJoinMutation = ({
  joinInfo,
  setDialog,
  setDialogText,
}: IProps) => {
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
