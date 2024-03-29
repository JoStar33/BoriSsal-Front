import { Dispatch, SetStateAction } from 'react';
import styles from './admin_viewer_button.module.scss';

interface IProps {
  status: string;
  pageState: string;
  setPageState: Dispatch<SetStateAction<string>>;
}

const AdminViewerButton = ({ pageState, status, setPageState }: IProps) => {
  return (
    <div>
      {status === pageState && (
        <button className={styles.pushed_button} role={status} onClick={() => setPageState(status)}>
          {status}
        </button>
      )}
      {status !== pageState && (
        <button className={styles.normal_button} role={status} onClick={() => setPageState(status)}>
          {status}
        </button>
      )}
    </div>
  );
};

export default AdminViewerButton;
