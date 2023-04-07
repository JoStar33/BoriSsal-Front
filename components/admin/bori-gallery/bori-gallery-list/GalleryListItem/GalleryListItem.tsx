import { IBoriGallery, IPostBoriGallery } from "@/types/boriGallery";
import { useEffect, useState } from "react";
import styles from '../../../bori-goods/bori-goods-list/GoodsListItem/goods_list_item.module.scss';
import GalleryItemController from "../GalleryItemController/GalleryItemController";
import GalleryItemImage from "../GalleryItemImage/GalleryItemImage";

interface IProps {
  boriGallery: IBoriGallery;
}

const GalleryListItem = ({ boriGallery }: IProps) => {
  const [galleryInfo, setGalleryInfo] = useState<IPostBoriGallery>({
    bori_gallery_title: "",
    bori_gallery_desc: ""
  });
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
      <div className={styles.goods_list_item_container}>
        <GalleryItemImage
          boriGallery={boriGallery}/>
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
        <GalleryItemController 
          boriGallery={boriGallery} 
          galleryInfo={galleryInfo}/>
      </div>
    </>
  );
};

export default GalleryListItem;