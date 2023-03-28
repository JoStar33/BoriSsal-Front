import ValidateDialog from "@/components/dialogs/ValidateDialog/ValidateDialog";
import { useRegistBoriGalleryMutaton } from "@/hooks/bori-gallery/useRegistBoriGalleryMutaton/useRegistBoriGalleryMutaton";
import { IPostBoriGallery } from "@/types/boriGallery";
import Image from "next/image";
import { useRef, useState } from "react";
import styles from '../BoriGoodsRegister/bori_goods_register.module.scss';

const BoriGalleryRegister = () => {
  const [image, setImage] = useState<any>("");
  const [galleryInfo, setGalleryInfo] = useState<IPostBoriGallery>({
    bori_gallery_title: '',
    bori_gallery_desc: ''
  });
  let formData = useRef<FormData>(new FormData());
  const [dialog, setDialog] = useState<boolean>(false);
  const [dialogText, setDialogText] = useState<string>('');
  const { mutate } = useRegistBoriGalleryMutaton(galleryInfo, formData.current);
  const handleOnChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file: File = e.target.files[0];
    const fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = (e) => {
      if (!e.target) return;
      if (fr.readyState === 2) {
        formData.current = new FormData();
        setImage(e.target.result);
        formData.current.append("bori_gallery_images", file);
      }
    };
  };
  const handleOnChangeGalleryInfo = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setGalleryInfo({
      ...galleryInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegistBoriGoods = () => {
    if(!image) {
      setDialogText('이미지는 반드시 있어야해요!');
      setDialog(true);
      return;
    }
    if(galleryInfo.bori_gallery_title.length < 1) {
      setDialogText('이런 제목을 안 설정하셨는데... 다시 확인해주세요!');
      setDialog(true);
      return;
    }
    if(galleryInfo.bori_gallery_desc.length < 10) {
      setDialogText('설명을 최소 10글자 이상 써주세요!');
      setDialog(true);
      return;
    }
    mutate();
  }
  return (
    <>
      {
        dialog && 
        <figure style={{marginLeft: "-5vw"}}>
          <ValidateDialog setDialog={setDialog} text={dialogText}></ValidateDialog>
        </figure>
      }
      <div className={styles.bori_goods_register_container}>
        {!image ? (
          <label className={styles.regist_image} htmlFor="input-file">
            갤러리 이미지
          </label>
        ) : (
          <label className={styles.regist_image} htmlFor="input-file">
            <figure
              style={{ width: "30vw", height: "30vw", position: "relative" }}
            >
              <Image fill src={image} alt="갤러리 이미지" />
            </figure>
          </label>
        )}
        <input
          id="input-file"
          type="file"
          onChange={handleOnChangeImage}
          style={{ display: "none" }}
          accept="image/png, image/jpeg"
        />
        <div className={styles.text_container}>
          <label htmlFor="goods-name">제목:</label>
          <input onChange={handleOnChangeGalleryInfo} name="bori_gallery_title" id="goods-name" type="text" />
        </div>
        <div className={styles.content_container}>
          <p>갤러리 설명</p>
          <textarea onChange={handleOnChangeGalleryInfo} name="bori_gallery_desc"></textarea>
        </div>
        <button onClick={handleRegistBoriGoods} className={styles.goods_register_button}>갤러리 등록</button>
      </div>
    </>
  );
};

export default BoriGalleryRegister;