import styles from './header_user_part_skeleton.module.scss';

const HeaderUserPartSkeleton = () => {
  return (
    <div className={styles.header_user_part_skeleton_container}>
      <div className={styles.header_user_part_skeleton} />
    </div>
  );
};

export default HeaderUserPartSkeleton;
