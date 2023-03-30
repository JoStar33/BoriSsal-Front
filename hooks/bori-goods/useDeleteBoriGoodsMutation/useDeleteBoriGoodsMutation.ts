import { deleteBorigoods } from "@/apis/bori-goods/boriGoods";
import { Dispatch, SetStateAction } from "react";
import { useMutation, useQueryClient } from "react-query";
import { errorMessage } from './../../../apis/error/customError';

export const useDeleteBoriGoodsMutation = (
  bori_goods_id: string,
  setDialog: Dispatch<SetStateAction<boolean>>,
  setDialogText: Dispatch<SetStateAction<string>>,
  setSuccessDialog: Dispatch<SetStateAction<boolean>>,
  setSuccessDialogText: Dispatch<SetStateAction<string>>
) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => deleteBorigoods(bori_goods_id), {
      onSuccess: () => {
        setSuccessDialogText("굿즈 삭제가 성공했습니다!")
        setSuccessDialog(true);
        queryClient.invalidateQueries("bori-goods");
      },
      onError: (error) => {
        setDialogText(errorMessage(error));
        setDialog(true);
      }
    }
  );
};
