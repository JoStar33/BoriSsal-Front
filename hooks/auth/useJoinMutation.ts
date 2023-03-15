import { useMutation } from "react-query";
import { join } from "@/apis/user/auth";
import { useRouter } from "next/router";
import { joinType } from "@/types/auth";
import { AxiosError } from "axios";

type propsType = {
  setDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setDialogText: React.Dispatch<React.SetStateAction<string>>;
  joinInfo: joinType;
};

export const useJoinMutation = ({
  joinInfo,
  setDialog,
  setDialogText,
}: propsType) => {
  const router = useRouter();
  return useMutation(
    () => join(joinInfo.email, joinInfo.nick, joinInfo.password),
    {
      onSuccess: () => {
        router.push("/");
      },
      onError: (error: AxiosError) => {
        setDialogText(error.message);
        setDialog(true);
      },
    }
  );
};
