import { IBoriGallery } from "@/types/boriGallery";
import Image from "next/image";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import styles from './bori_gallery_item.module.scss';

interface IProps {
  gallery: IBoriGallery;
}

const BoriGalleryItem = ({ gallery }: IProps) => {
  return (
    <Link href={`/bori-gallery/${gallery._id}`} aria-label={`${gallery.bori_gallery_title} 페이지로 이동`}>
      <div className={styles.bori_gallery_item}>
        <div style={{ position: 'relative', width: "25vw", height: "25vw" }}>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${gallery.bori_gallery_image}`}
            alt={gallery.bori_gallery_title}
            style={{objectFit: "cover"}}
            fill
          ></Image>
        </div>
        <div className={styles.heart_box}>
          <AiFillHeart style={{ width: "2vw", height: "2vw" }}/>
          {gallery.bori_gallery_like}
        </div>
        <div className={styles.bori_gallery_info}>
          <p className={styles.bori_gallery_title}>{gallery.bori_gallery_title}</p>
        </div>
      </div>
    </Link>
  );
};

export default BoriGalleryItem;
