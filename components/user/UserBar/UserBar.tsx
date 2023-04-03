import Loading from '@/components/loading/Loading/Loading';
import { useLogoutMutation } from '@/hooks/auth/useLogoutMutation/useLogoutMutation';
import { useValidateDialog } from '@/hooks/common/useValidateDialog/useValidateDialog';
import { IUser } from '@/types/user';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillCartFill } from 'react-icons/bs';
import styles from './userbar.module.scss';

interface IProps {
  user: IUser;
}

const UserBar = ({ user }: IProps) => {
  const { dialog, setDialog, dialogText, renderDialog } =
    useValidateDialog();
  const { mutate, isLoading } = useLogoutMutation(setDialog, dialogText);
  return (
    <>
      {
        dialog && renderDialog()
      }
      {
        isLoading && <Loading></Loading>
      }
      <div className={styles.userbar_container}>
        <Link href='/cart-page' aria-label="장바구니 페이지로 이동">
          <BsFillCartFill style={{width: "3vw", height: "3vw", position: "relative"}}></BsFillCartFill>
        </Link>
        <Link className={styles.user_profile_container} href='/user' aria-label="사용자 페이지로 이동">
          {
            user.profile_image 
              ? <figure style={{width: '3vw', height: "3vw", position: "relative", borderRadius: "100px"}}>
                  <Image
                    role='profile'
                    style={{borderRadius: '100px'}}
                    fill
                    alt='프로필 이미지'
                    src={process.env.NEXT_PUBLIC_BORI_SSAL_API_URL + user.profile_image}></Image>
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
          className={styles.logout_button} 
          onClick={() => mutate()}>
          Logout
        </button>
      </div>
    </>
  );
};

export default UserBar;