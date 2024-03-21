import LoginButton from '@/components/user/LoginButton/LoginButton';
import UserBar from '@/components/user/UserBar/UserBar';
import { useUserQuery } from '@/hooks/user/useUserQuery/useUserQuery';
import { initUser } from '@/utils/initData';

const HeaderUserPart = () => {
  let { data: user, isSuccess } = useUserQuery();
  if (!user) {
    user = initUser;
  }
  return (
    <>
      {!isSuccess && <LoginButton />}
      {isSuccess && <UserBar user={user} />}
    </>
  );
};

export default HeaderUserPart;
