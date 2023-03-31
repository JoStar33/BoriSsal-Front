import { useRegistImage } from "@/hooks/common/useRegistImage/useRegistImage";
import { useSuccessDialog } from "@/hooks/common/useSuccessDialog/useSuccessDialog";
import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";
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
  const { dialog, setDialog, dialogText, renderDialog } = useValidateDialog();
  const {
    successDialog,
    setSuccessDialog,
    successDialogText,
    renderSuccessDialog,
  } = useSuccessDialog();
  const {formData, setImage, image, renderRegistImage} = useRegistImage();
  return (
    <>
      {dialog && (
        <figure style={{ marginLeft: "-5vw" }}>
          {
            renderDialog()
          }
        </figure>
      )}
      {
        successDialog && (
          <figure style={{ marginLeft: "-5vw" }}>
            {
              renderSuccessDialog()
            }
          </figure>
        )
      }
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
          setDialog={setDialog}
          dialogText={dialogText}
          setSuccessDialog={setSuccessDialog}
          successDialogText={successDialogText}
          setGalleryInfo={setGalleryInfo}/>
      </div>
    </>
  );
};

export default BoriGalleryRegister;
