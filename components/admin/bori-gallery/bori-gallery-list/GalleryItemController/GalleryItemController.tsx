import Loading from "@/components/loading/Loading/Loading";
import { useDeleteBoriGalleryMutation } from "@/hooks/bori-gallery/useDeleteBoriGalleryMutation/useDeleteBoriGalleryMutation";
import { useUpdateBoriGalleryMutation } from "@/hooks/bori-gallery/useUpdateBoriGalleryMutation/useUpdateBoriGalleryMutation";
import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";
import { IBoriGallery, IPostBoriGallery } from "@/types/boriGallery";
import styles from './gallery_item_controller.module.scss';

interface IProps {
  boriGallery: IBoriGallery;
  galleryInfo: IPostBoriGallery;
}

const GalleryItemController = ({
  boriGallery, galleryInfo
}: IProps) => {
  const { mutate: updateBoriGoods, isLoading: updateLoading } = useUpdateBoriGalleryMutation(boriGallery._id, galleryInfo);
  const { mutate: deleteBoriGoods, isLoading: deleteLoading } = useDeleteBoriGalleryMutation(boriGallery._id);
  const { setDialog, setDialogText } = useValidateDialog();
  const handleUpdateGoods = () => {
    if (
      !galleryInfo.bori_gallery_title ||
      !galleryInfo.bori_gallery_desc 
    ) {
      setDialogText("값을 비운 상태로 수정이 불가능합니다.");
      setDialog(true);
      return;
    }
    setDialog(true);
    setDialogText("수정이 완료됐습니다!");
    updateBoriGoods();
  };
  const handleDeleteGoods = () => {
    deleteBoriGoods();
  }
  return (
    <>      {
      (deleteLoading || updateLoading) && <Loading/>
    }
      <div className={styles.button_container}>
        <button role="update-gallery" onClick={handleUpdateGoods} className={styles.modify_button}>
          수정
        </button>
        <button onClick={handleDeleteGoods} className={styles.delete_button}>삭제</button>
      </div>
    </>
  );
};

export default GalleryItemController;