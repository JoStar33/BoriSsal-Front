import { useRegistBoriGalleryMutaton } from "@/hooks/bori-gallery/useRegistBoriGalleryMutaton/useRegistBoriGalleryMutaton";
import { IPostBoriGallery } from "@/types/boriGallery";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import styles from './bori_gallery_register_controller.module.scss';

interface IProps {
  image: any;
  setDialog: Dispatch<SetStateAction<boolean>>;
  setDialogText: Dispatch<SetStateAction<string>>;
  setSuccessDialog: Dispatch<SetStateAction<boolean>>;
  setSuccessDialogText: Dispatch<SetStateAction<string>>;
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
  setDialogText,
  setSuccessDialog,
  setSuccessDialogText,
  setGalleryInfo,
  formData
}: IProps) => {
  const { mutate } = useRegistBoriGalleryMutaton(
    galleryInfo,
    formData.current,
    setGalleryInfo,
    setImage,
    setDialog,
    setDialogText,
    setSuccessDialog,
    setSuccessDialogText
  );
  const handleRegistBoriGoods = () => {
    if (!image) {
      setDialogText("이미지는 반드시 있어야해요!");
      setDialog(true);
      return;
    }
    if (galleryInfo.bori_gallery_title.length < 1) {
      setDialogText("이런 제목을 안 설정하셨는데... 다시 확인해주세요!");
      setDialog(true);
      return;
    }
    if (galleryInfo.bori_gallery_desc.length < 10) {
      setDialogText("설명을 최소 10글자 이상 써주세요!");
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
