import { useSuccessDialog } from '@/hooks/common/useSuccessDialog/useSuccessDialog';
import { errorMessage } from './../../../apis/error/customError';

import { patchBoriGoodsImage } from '@/apis/bori-goods/boriGoods';
import { useValidateDialog } from '@/hooks/common/useValidateDialog/useValidateDialog';
import { useMutation, useQueryClient } from 'react-query';

export const useBoriGoodsImageMutation = (goods_id: string) => {
  const queryClient = useQueryClient();
  const { setDialog, setDialogText } = useValidateDialog();
  const { setSuccessDialog, setSuccessDialogText } = useSuccessDialog();

  return useMutation((bori_goods_image: FormData) => patchBoriGoodsImage(goods_id, bori_goods_image), {
    onSuccess: () => {
      setSuccessDialog(true);
      setSuccessDialogText('이미지 수정 성공!');
      queryClient.invalidateQueries('bori-goods');
    },
    onError: (error) => {
      setDialog(true);
      setDialogText(errorMessage(error));
    },
  });
};
