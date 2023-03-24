import { useUserStore } from '@/store/user';
import styles from './user_info_viewer.module.scss';

const UserInfoViewer = () => {
  const { user } = useUserStore();
  return (
    <div className={styles.info_container}>
      <p>이메일: 
        {
          user.email
        }
      </p>
      <p>유저 닉네임: 
        {
          user.nick
        }
      </p>
    </div>
  );
};

export default UserInfoViewer;