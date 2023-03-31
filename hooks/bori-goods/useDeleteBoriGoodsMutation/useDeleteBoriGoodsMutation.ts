import { deleteBorigoods } from "@/apis/bori-goods/boriGoods";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { useMutation, useQueryClient } from "react-query";
import { errorMessage } from './../../../apis/error/customError';

export const useDeleteBoriGoodsMutation = (
  bori_goods_id: string,
  setDialog: Dispatch<SetStateAction<boolean>>,
  dialogText: MutableRefObject<string>
) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => deleteBorigoods(bori_goods_id), {
      onSuccess: () => {
        queryClient.invalidateQueries("bori-goods");
      },
      onError: (error) => {
        dialogText.current = errorMessage(error);
        setDialog(true);
      }
    }
  );
};
