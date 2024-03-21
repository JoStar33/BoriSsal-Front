import { errorMessage } from '@/apis/error/customError';
import { join } from '@/apis/user/auth';
import { useSuccessDialog } from '@/hooks/common/useSuccessDialog/useSuccessDialog';
import { useValidateDialog } from '@/hooks/common/useValidateDialog/useValidateDialog';
import { IJoin } from '@/types/auth';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

interface IProps {
  joinInfo: IJoin;
}

export const useJoinMutation = ({ joinInfo }: IProps) => {
  const { setDialog, setDialogText } = useValidateDialog();
  const { setSuccessDialog, setSuccessDialogText } = useSuccessDialog();
  const router = useRouter();
  return useMutation(() => join(joinInfo.email, joinInfo.nick, joinInfo.password), {
    onSuccess: () => {
      setSuccessDialog(true);
      setSuccessDialogText('회원가입에 성공했습니다! 잠시후 로그인창으로 이동합니다.');
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    },
    onError: (error: AxiosError) => {
      setDialogText(errorMessage(error));
      setDialog(true);
    },
  });
};
