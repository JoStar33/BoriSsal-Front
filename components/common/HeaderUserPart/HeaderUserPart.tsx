import LoginButton from '@/components/user/LoginButton/LoginButton';
import UserBar from '@/components/user/UserBar/UserBar';
import { useUserQuery } from '@/hooks/user/useUserQuery/useUserQuery';
import { initUser } from '@/utils/initData';

const HeaderUserPart = () => {
  let { data: user, isError } = useUserQuery();
  if(!user) {
    user = initUser;
  }
  return (
    <>
      { user && !isError ? (
        <UserBar user={user}></UserBar>
      ) : (
        <LoginButton></LoginButton>
      )}
    </>
  );
};

export default HeaderUserPart;