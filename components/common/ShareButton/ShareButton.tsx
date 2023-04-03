import { CiShare1 } from 'react-icons/ci';
import styles from './share_button.module.scss';

const ShareButton = () => {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
  }
  return (
    <div onClick={handleShare} className={styles.share_button}>
      <CiShare1 style={{width: "3vw", height: "3vw"}}/>
    </div>
  );
};

export default ShareButton;