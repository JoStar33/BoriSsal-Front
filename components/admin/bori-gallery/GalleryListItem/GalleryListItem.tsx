import { useBoriGalleryImageMutation } from "@/hooks/bori-gallery/useBoriGalleryImageMutation/useBoriGalleryImageMutation";
import { useDeleteBoriGalleryMutation } from "@/hooks/bori-gallery/useDeleteBoriGalleryMutation/useDeleteBoriGalleryMutation";
import { useUpdateBoriGalleryMutation } from "@/hooks/bori-gallery/useUpdateBoriGalleryMutation/useUpdateBoriGalleryMutation";
import { useSuccessDialog } from "@/hooks/common/useSuccessDialog/useSuccessDialog";
import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";
import { IBoriGallery, IPostBoriGallery } from "@/types/boriGallery";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from '../GoodsListItem/goods_list_item.module.scss';

interface IProps {
  boriGallery: IBoriGallery;
}

const GalleryListItem = ({ boriGallery }: IProps) => {
  const formData = useRef<FormData>(new FormData());
  const [galleryInfo, setGalleryInfo] = useState<IPostBoriGallery>({
    bori_gallery_title: "",
    bori_gallery_desc: ""
  });
  const { dialog, setDialog, setDialogText, renderDialog } = useValidateDialog();
  const { successDialog, setSuccessDialog, setSuccessDialogText, renderSuccessDialog } = useSuccessDialog();
  const { mutate: updateBoriImage } = useBoriGalleryImageMutation(boriGallery._id, setDialog, setDialogText, setSuccessDialog, setSuccessDialogText);
  const { mutate: updateBoriGoods } = useUpdateBoriGalleryMutation(boriGallery._id, galleryInfo, setDialog, setDialogText);
  const { mutate: deleteBoriGoods } = useDeleteBoriGalleryMutation(boriGallery._id, setDialog, setDialogText, setSuccessDialog, setSuccessDialogText);
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
  const handleOnChangeGoodsImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file: File = e.target.files[0];
    formData.current.append("bori_goods_images", file);
    updateBoriImage(formData.current);
  };
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
    <>
      {
        dialog && renderDialog() 
      }
      {
        successDialog && renderSuccessDialog()
      }
      <div className={styles.goods_list_item_container}>
        <label htmlFor="">
          <figure
            style={{
              width: "10vw",
              height: "10vw",
              position: "relative",
              margin: "2vw",
            }}
          >
            <Image
              fill
              src={`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}${boriGallery.bori_gallery_image}`}
              alt={boriGallery.bori_gallery_title}
            />
          </figure>
        </label>
        <input
          id="input-file"
          type="file"
          onChange={handleOnChangeGoodsImage}
          style={{ display: "none" }}
          accept="image/png, image/jpeg"
        />
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
        <div className={styles.button_container}>
          <button role="update-gallery" onClick={handleUpdateGoods} className={styles.modify_button}>
            수정
          </button>
          <button onClick={handleDeleteGoods} className={styles.delete_button}>삭제</button>
        </div>
      </div>
    </>
  );
};

export default GalleryListItem;