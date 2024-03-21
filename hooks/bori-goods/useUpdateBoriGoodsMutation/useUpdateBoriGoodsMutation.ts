import { putBorigoods } from '@/apis/bori-goods/boriGoods';
import { useValidateDialog } from '@/hooks/common/useValidateDialog/useValidateDialog';
import { IPostBoriGoods } from '@/types/boriGoods';
import { useMutation, useQueryClient } from 'react-query';
import { errorMessage } from './../../../apis/error/customError';

export const useUpdateBoriGoodsMutation = (category_id: string, bori_goods: IPostBoriGoods, bori_goods_id: string) => {
  const queryClient = useQueryClient();
  const { setDialog, setDialogText } = useValidateDialog();
  return useMutation(() => putBorigoods(bori_goods, category_id, bori_goods_id), {
    onSuccess: () => {
      queryClient.invalidateQueries('bori-goods');
    },
    onError: (error) => {
      setDialog(true);
      setDialogText(errorMessage(error));
    },
  });
};
