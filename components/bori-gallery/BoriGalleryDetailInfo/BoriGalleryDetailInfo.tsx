import ShareButton from "@/components/common/ShareButton/ShareButton";
import { IBoriGallery } from "@/types/boriGallery";
import { IUser } from "@/types/user";
import Image from "next/image";
import BoriGalleryDetailLike from "../BoriGalleryDetailLike/BoriGalleryDetailLike";
import styles from "./bori_gallery_detail_info.module.scss";

interface IProps {
  gallery: IBoriGallery;
  user: IUser;
}

const BoriGalleryDetailInfo = ({ gallery, user }: IProps) => {
  return (
    <>
      <div className={styles.bori_gallery_detail_info_container}>
        <h1>{gallery.bori_gallery_title}</h1>
        <figure style={{ position: "relative", width: "48vw", height: "48vw" }}>
          <Image
            style={{ border: "2px solid black", objectFit: "cover" }}
            fill
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${gallery.bori_gallery_image}`}
            alt={gallery.bori_gallery_title}
          ></Image>
        </figure>
        <div className={styles.gallery_info}>
          <BoriGalleryDetailLike
            gallery={gallery}
            user={user}
          />
          <ShareButton/>
        </div>
        <p className={styles.gallery_description}>
          {gallery.bori_gallery_desc}
        </p>
      </div>
    </>
  );
};

export default BoriGalleryDetailInfo;
