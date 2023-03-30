import { deleteBorigoods } from "@/apis/bori-goods/boriGoods";
import { Dispatch, SetStateAction } from "react";
import { useMutation, useQueryClient } from "react-query";
import { errorMessage } from './../../../apis/error/customError';

export const useDeleteBoriGoodsMutation = (
  bori_goods_id: string,
  setDialog: Dispatch<SetStateAction<boolean>>,
  setDialogText: Dispatch<SetStateAction<string>>
) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => deleteBorigoods(bori_goods_id), {
      onSuccess: () => {
        queryClient.invalidateQueries("bori-goods");
      },
      onError: (error) => {
        setDialogText(errorMessage(error));
        setDialog(true);
      }
    }
  );
};
