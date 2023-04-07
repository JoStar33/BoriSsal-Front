import Loading from '@/components/loading/Loading/Loading';
import { useLogoutMutation } from '@/hooks/auth/useLogoutMutation/useLogoutMutation';
import { IUser } from '@/types/user';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillCartFill } from 'react-icons/bs';
import styles from './userbar.module.scss';

interface IProps {
  user: IUser;
}

const UserBar = ({ user }: IProps) => {
  const { mutate, isLoading } = useLogoutMutation();
  return (
    <>
      {
        isLoading && <Loading></Loading>
      }
      <div className={styles.userbar_container}>
        <Link href='/cart-page' aria-label="장바구니 페이지로 이동">
          <BsFillCartFill color='black' style={{width: "3vw", height: "3vw", position: "relative", minWidth: "1.5rem", minHeight: "1.5rem"}}></BsFillCartFill>
        </Link>
        <Link className={styles.user_profile_container} href='/user' aria-label="사용자 페이지로 이동">
          {
            user.profile_image 
              ? <figure style={{width: '3vw', height: "3vw", position: "relative", borderRadius: "100px", minWidth: "1.5rem", minHeight: "1.5rem"}}>
                  <Image
                    role='profile'
                    style={{borderRadius: '100px', objectFit: "cover"}}
                    fill
                    alt='프로필 이미지'
                    src={process.env.NEXT_PUBLIC_IMAGE_URL + user.profile_image}></Image>
                </figure>
              : <div
                  role='non_profile'
                  className={styles.non_profile}></div>
          }
        </Link>
        <div className={styles.name_space}>
          <p>Welcome</p>
          <p>{user.nick}</p>
        </div>
        <button 
          aria-label="로그아웃 버튼"
          className={styles.logout_button} 
          onClick={() => mutate()}>
          Logout
        </button>
      </div>
    </>
  );
};

export default UserBar;