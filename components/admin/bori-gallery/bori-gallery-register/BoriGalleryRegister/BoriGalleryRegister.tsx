import { useRegistImage } from "@/hooks/common/useRegistImage/useRegistImage";
import { IPostBoriGallery } from "@/types/boriGallery";
import { useState } from "react";
import styles from "../../../bori-goods/bori-goods-register/BoriGoodsRegister/bori_goods_register.module.scss";
import BoriGalleryRegisterController from "../BoriGalleryRegisterController/BoriGalleryRegisterController";
import BoriGalleryRegisterInputViewer from "../BoriGalleryRegisterInputViewer/BoriGalleryRegisterInputViewer";

const BoriGalleryRegister = () => {
  const [galleryInfo, setGalleryInfo] = useState<IPostBoriGallery>({
    bori_gallery_title: "",
    bori_gallery_desc: "",
  });
  const {formData, setImage, image, renderRegistImage} = useRegistImage();
  return (
    <>
      <div className={styles.bori_goods_register_container}>
        {
          renderRegistImage("갤러리 이미지", "bori_gallery_images")
        }
        <BoriGalleryRegisterInputViewer
          galleryInfo={galleryInfo}
          setGalleryInfo={setGalleryInfo}/>
        <BoriGalleryRegisterController
          galleryInfo={galleryInfo}
          image={image}
          formData={formData}
          setImage={setImage}
          setGalleryInfo={setGalleryInfo}/>
      </div>
    </>
  );
};

export default BoriGalleryRegister;
