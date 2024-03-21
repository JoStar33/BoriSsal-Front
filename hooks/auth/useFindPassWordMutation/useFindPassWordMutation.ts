import { findPassword } from '@/apis/user/auth';
import { useSuccessDialog } from '@/hooks/common/useSuccessDialog/useSuccessDialog';
import { useValidateDialog } from '@/hooks/common/useValidateDialog/useValidateDialog';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { errorMessage } from './../../../apis/error/customError';

export const useFindPassWordMutation = (email: string) => {
  const { setDialog, setDialogText } = useValidateDialog();
  const { setSuccessDialog, setSuccessDialogText } = useSuccessDialog();
  const router = useRouter();
  return useMutation(() => findPassword(email), {
    onSuccess: () => {
      setSuccessDialog(true);
      setSuccessDialogText('임시비밀번호가 메일로 전송됐습니다!');
      setTimeout(() => {
        router.push('/');
      }, 2000);
    },
    onError: (error) => {
      setDialog(true);
      setDialogText(errorMessage(error));
    },
  });
};
