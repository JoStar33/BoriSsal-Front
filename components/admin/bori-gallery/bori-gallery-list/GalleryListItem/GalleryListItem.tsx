import { useSuccessDialog } from "@/hooks/common/useSuccessDialog/useSuccessDialog";
import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";
import { IBoriGallery, IPostBoriGallery } from "@/types/boriGallery";
import { useEffect, useState } from "react";
import styles from '../../../bori-goods/bori-goods-list/GoodsListItem/goods_list_item.module.scss';
import GalleryItemImage from "../GalleryItemImage/GalleryItemImage";

interface IProps {
  boriGallery: IBoriGallery;
}

const GalleryListItem = ({ boriGallery }: IProps) => {
  const [galleryInfo, setGalleryInfo] = useState<IPostBoriGallery>({
    bori_gallery_title: "",
    bori_gallery_desc: ""
  });
  const { dialog, setDialog, setDialogText, renderDialog } = useValidateDialog();
  const { successDialog, setSuccessDialog, setSuccessDialogText, renderSuccessDialog } = useSuccessDialog();
  useEffect(() => {
    setGalleryInfo({
      bori_gallery_title: boriGallery.bori_gallery_title,
      bori_gallery_desc: boriGallery.bori_gallery_desc
    });
  }, []);
  const handleOnChangeGoodsInfo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setGalleryInfo({
      ...galleryInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      {
        dialog && renderDialog() 
      }
      {
        successDialog && renderSuccessDialog()
      }
      <div className={styles.goods_list_item_container}>
        <GalleryItemImage
          boriGallery={boriGallery}
          setDialog={setDialog}
          setDialogText={setDialogText}
          setSuccessDialog={setSuccessDialog}
          setSuccessDialogText={setSuccessDialogText}/>
        <div className={styles.goods_info}>
          <input
            style={{marginLeft: "9vw", marginRight: "9vw"}}
            className={styles.name}
            onChange={handleOnChangeGoodsInfo}
            name="bori_gallery_title"
            value={galleryInfo.bori_gallery_title}
            type="text"
          />
        </div>
        <div className={styles.desc_container}>
          <p>설명</p>
          <textarea
            onChange={handleOnChangeGoodsInfo}
            name="bori_gallery_desc"
            value={galleryInfo.bori_gallery_desc}
          />
        </div>
      </div>
    </>
  );
};

export default GalleryListItem;