import { errorMessage } from "@/apis/error/customError";
import { join } from "@/apis/user/auth";
import { IJoin } from "@/types/auth";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

interface IProps {
  setDialog: React.Dispatch<React.SetStateAction<boolean>>;
  dialogText: React.MutableRefObject<string>;
  joinInfo: IJoin;
};

export const useJoinMutation = ({
  joinInfo,
  setDialog,
  dialogText,
}: IProps) => {
  const router = useRouter();
  return useMutation(
    () => join(joinInfo.email, joinInfo.nick, joinInfo.password),
    {
      onSuccess: () => {
        router.push("/");
      },
      onError: (error: AxiosError) => {
        dialogText.current = errorMessage(error);
        setDialog(true);
      },
    }
  );
};
