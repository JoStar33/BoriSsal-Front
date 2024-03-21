import { patchBoriGalleryImage } from '@/apis/bori-gallery/boriGallery';
import { errorMessage } from '@/apis/error/customError';
import { useSuccessDialog } from '@/hooks/common/useSuccessDialog/useSuccessDialog';
import { useValidateDialog } from '@/hooks/common/useValidateDialog/useValidateDialog';
import { useMutation, useQueryClient } from 'react-query';

export const useBoriGalleryImageMutation = (bori_gallery_id: string) => {
  const queryClient = useQueryClient();
  const { setDialog, setDialogText } = useValidateDialog();
  const { setSuccessDialog, setSuccessDialogText } = useSuccessDialog();

  return useMutation((bori_gallery_image: FormData) => patchBoriGalleryImage(bori_gallery_id, bori_gallery_image), {
    onSuccess: () => {
      setSuccessDialog(true);
      setSuccessDialogText('이미지 업로드가 성공했습니다!');
      queryClient.invalidateQueries('bori-gallery');
    },
    onError: (error) => {
      setDialog(true);
      setDialogText(errorMessage(error));
    },
  });
};
