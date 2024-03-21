import { errorMessage } from '@/apis/error/customError';
import { login } from '@/apis/user/auth';
import { useValidateDialog } from '@/hooks/common/useValidateDialog/useValidateDialog';
import { ILogin } from '@/types/auth';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';

interface IProps {
  loginInfo: ILogin;
}

export const useLoginMutation = ({ loginInfo }: IProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { setDialog, setDialogText } = useValidateDialog();
  return useMutation(() => login(loginInfo.email, loginInfo.password), {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
      router.push('/');
    },
    onError: (error: AxiosError) => {
      setDialogText(errorMessage(error));
      setDialog(true);
    },
  });
};
