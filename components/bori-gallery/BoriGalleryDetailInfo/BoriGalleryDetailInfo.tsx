import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";
import React from "react";
import Image from "next/image";
import { IBoriGallery } from "@/types/boriGallery";
import { IUser } from "@/types/user";
import styles from "./bori_gallery_detail_info.module.scss";
import BoriGalleryDetailLike from "../BoriGalleryDetailLike/BoriGalleryDetailLike";

interface IProps {
  gallery: IBoriGallery;
  user: IUser;
}

const BoriGalleryDetailInfo = ({ gallery, user }: IProps) => {
  const { renderDialog, setDialog, dialogText, dialog } = useValidateDialog();
  return (
    <>
      {dialog && renderDialog()}
      <div className={styles.bori_gallery_detail_info_container}>
        <h1>{gallery.bori_gallery_title}</h1>
        <figure style={{ position: "relative", width: "48vw", height: "48vw" }}>
          <Image
            style={{ border: "2px solid black" }}
            fill
            src={`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}${gallery.bori_gallery_image}`}
            alt={gallery.bori_gallery_title}
          ></Image>
        </figure>
        <div className={styles.gallery_info}>
          <BoriGalleryDetailLike
            validateText={dialogText}
            setValidateDialog={setDialog}
            gallery={gallery}
            user={user}
          />
        </div>
        <p className={styles.gallery_description}>
          {gallery.bori_gallery_desc}
        </p>
      </div>
    </>
  );
};

export default BoriGalleryDetailInfo;
