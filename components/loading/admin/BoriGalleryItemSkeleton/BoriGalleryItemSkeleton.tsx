import styles from './bori_gallery_item_skeleton.module.scss';

const BoriGalleryItemSkeleton = () => {
  return (
    <div className={styles.gallery_list_item_container}>
      <div className={styles.gallery_image} />
      <div className={styles.gallery_info}>
        <div />
      </div>
      <div className={styles.desc_container} />
      <div className={styles.button_container}>
        <div />
      </div>
    </div>
  );
};

export default BoriGalleryItemSkeleton;
