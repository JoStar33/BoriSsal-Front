import LoginButton from '@/components/user/LoginButton/LoginButton';
import UserBar from '@/components/user/UserBar/UserBar';
import { useUserStore } from '@/store/user';

const HeaderUserPart = () => {
  const { user } = useUserStore();
  return (
    <>
      {user.id.length > 3 ? (
        <UserBar></UserBar>
      ) : (
        <LoginButton></LoginButton>
      )}
    </>
  );
};

export default HeaderUserPart;