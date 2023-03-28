import { useBoriGalleryQuery } from "@/hooks/bori-gallery/useBoriGalleryQuery/useBoriGalleryQuery";
import { useState } from "react";
import styles from '../BoriGoodsList/bori_goods_list.module.scss';
import GalleryListItem from "../GalleryListItem/GalleryListItem";

const BoriGalleryList = () => {
  let { data: boriGallery } = useBoriGalleryQuery();
  const [searchInfo, setSearchInfo] = useState<string>('');
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInfo(e.target.value);
  };
  if(!boriGallery) {
    boriGallery = [];
  }
  return (
    <>
      <div className={styles.list_controller}>
        <div className={styles.search_container}>
          <label htmlFor="search_goods">검색:</label>
          <input id='search_goods' type="text" onChange={handleSearch}/>
        </div>
      </div>
      <div className={styles.list_container}>
        {
          boriGallery
          .filter((searchGallery) =>
            searchGallery.bori_gallery_title.includes(searchInfo)
          )
          .map(galleryElement => <GalleryListItem key={galleryElement._id} boriGallery={galleryElement}/>)
        }
      </div>
    </>
  );
};

export default BoriGalleryList;