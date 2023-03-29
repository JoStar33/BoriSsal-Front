import { useRegistBoriGalleryMutaton } from "@/hooks/bori-gallery/useRegistBoriGalleryMutaton/useRegistBoriGalleryMutaton";
import { useDialog } from "@/hooks/common/useDialog/useDialog";
import { useRegistImage } from "@/hooks/common/useRegistImage/useRegistImage";
import { IPostBoriGallery } from "@/types/boriGallery";
import { useState } from "react";
import styles from "../BoriGoodsRegister/bori_goods_register.module.scss";
import RegistImage from "../RegistImage/RegistImage";

const BoriGalleryRegister = () => {
  const [galleryInfo, setGalleryInfo] = useState<IPostBoriGallery>({
    bori_gallery_title: "",
    bori_gallery_desc: "",
  });
  const { dialog, setDialog, setDialogText, renderDialog } = useDialog();
  const {formData, setImage, image} = useRegistImage();
  const { mutate } = useRegistBoriGalleryMutaton(
    galleryInfo,
    formData.current,
    setGalleryInfo,
    setImage
  );
  const handleOnChangeGalleryInfo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setGalleryInfo({
      ...galleryInfo,
      [e.target.name]: e.target.value,
    });
  };
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
    <>
      {dialog && (
        <figure style={{ marginLeft: "-5vw" }}>
          {
            renderDialog()
          }
        </figure>
      )}
      <div className={styles.bori_goods_register_container}>
        <RegistImage desc="갤러리 이미지"/>
        <div className={styles.text_container}>
          <label htmlFor="goods-name">제목:</label>
          <input
            onChange={handleOnChangeGalleryInfo}
            name="bori_gallery_title"
            id="goods-name"
            type="text"
          />
        </div>
        <div className={styles.content_container}>
          <p>갤러리 설명</p>
          <textarea
            onChange={handleOnChangeGalleryInfo}
            name="bori_gallery_desc"
          ></textarea>
        </div>
        <button
          onClick={handleRegistBoriGoods}
          className={styles.goods_register_button}
        >
          갤러리 등록
        </button>
      </div>
    </>
  );
};

export default BoriGalleryRegister;
