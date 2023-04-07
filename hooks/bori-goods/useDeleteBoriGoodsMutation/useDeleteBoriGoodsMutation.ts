import { deleteBorigoods } from "@/apis/bori-goods/boriGoods";
import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";
import { useMutation, useQueryClient } from "react-query";
import { errorMessage } from './../../../apis/error/customError';

export const useDeleteBoriGoodsMutation = (
  bori_goods_id: string
) => {
  const { setDialog, setDialogText } = useValidateDialog();
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
