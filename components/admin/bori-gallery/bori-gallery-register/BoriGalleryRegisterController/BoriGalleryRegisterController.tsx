import { useRegistBoriGalleryMutaton } from "@/hooks/bori-gallery/useRegistBoriGalleryMutaton/useRegistBoriGalleryMutaton";
import { IPostBoriGallery } from "@/types/boriGallery";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import styles from './bori_gallery_register_controller.module.scss';

interface IProps {
  image: any;
  setDialog: Dispatch<SetStateAction<boolean>>;
  dialogText: MutableRefObject<string>;
  setSuccessDialog: Dispatch<SetStateAction<boolean>>;
  successDialogText: MutableRefObject<string>
  setGalleryInfo: Dispatch<SetStateAction<IPostBoriGallery>>;
  galleryInfo: IPostBoriGallery;
  setImage: Dispatch<any>;
  formData: MutableRefObject<FormData>;
}

const BoriGalleryRegisterController = ({
  galleryInfo,
  image,
  setImage,
  setDialog,
  dialogText,
  setSuccessDialog,
  successDialogText,
  setGalleryInfo,
  formData
}: IProps) => {
  const { mutate } = useRegistBoriGalleryMutaton(
    galleryInfo,
    formData.current,
    setGalleryInfo,
    setImage,
    setDialog,
    dialogText,
    setSuccessDialog,
    successDialogText
  );
  const handleRegistBoriGoods = () => {
    if (!image) {
      dialogText.current = "이미지는 반드시 있어야해요!";
      setDialog(true);
      return;
    }
    if (galleryInfo.bori_gallery_title.length < 1) {
      dialogText.current = "이런 제목을 안 설정하셨는데... 다시 확인해주세요!";
      setDialog(true);
      return;
    }
    if (galleryInfo.bori_gallery_desc.length < 10) {
      dialogText.current = "설명을 최소 10글자 이상 써주세요!";
      setDialog(true);
      return;
    }
    mutate();
  };
  return (
    <button
      role="regist-button"
      onClick={handleRegistBoriGoods}
      className={styles.goods_register_button}
    >
      갤러리 등록
    </button>
  );
};

export default BoriGalleryRegisterController;
