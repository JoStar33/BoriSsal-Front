import { useDeleteBoriGalleryMutation } from "@/hooks/bori-gallery/useDeleteBoriGalleryMutation/useDeleteBoriGalleryMutation";
import { useUpdateBoriGalleryMutation } from "@/hooks/bori-gallery/useUpdateBoriGalleryMutation/useUpdateBoriGalleryMutation";
import { IBoriGallery, IPostBoriGallery } from "@/types/boriGallery";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import styles from './gallery_item_controller.module.scss';

interface IProps {
  boriGallery: IBoriGallery;
  galleryInfo: IPostBoriGallery;
  setDialog: Dispatch<SetStateAction<boolean>>;
  dialogText: MutableRefObject<string>;
}

const GalleryItemCotroller = ({
  boriGallery, galleryInfo, setDialog, dialogText
}: IProps) => {
  const { mutate: updateBoriGoods } = useUpdateBoriGalleryMutation(boriGallery._id, galleryInfo, setDialog, dialogText);
  const { mutate: deleteBoriGoods } = useDeleteBoriGalleryMutation(boriGallery._id, setDialog, dialogText);
  const handleUpdateGoods = () => {
    if (
      !galleryInfo.bori_gallery_title ||
      !galleryInfo.bori_gallery_desc 
    ) {
      dialogText.current = "값을 비운 상태로 수정이 불가능합니다.";
      setDialog(true);
      return;
    }
    setDialog(true);
    dialogText.current = "수정이 완료됐습니다!";
    updateBoriGoods();
  };
  const handleDeleteGoods = () => {
    deleteBoriGoods();
  }
  return (
    <>
      <div className={styles.button_container}>
        <button role="update-gallery" onClick={handleUpdateGoods} className={styles.modify_button}>
          수정
        </button>
        <button onClick={handleDeleteGoods} className={styles.delete_button}>삭제</button>
      </div>
    </>
  );
};

export default GalleryItemCotroller;