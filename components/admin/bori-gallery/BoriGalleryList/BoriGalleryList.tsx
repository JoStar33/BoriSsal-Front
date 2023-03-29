import { useBoriGalleryQuery } from "@/hooks/bori-gallery/useBoriGalleryQuery/useBoriGalleryQuery";
import { useSearch } from "@/hooks/common/useSearch/useSearch";
import styles from '../BoriGoodsList/bori_goods_list.module.scss';
import GalleryListItem from "../GalleryListItem/GalleryListItem";

const BoriGalleryList = () => {
  let { data: boriGallery } = useBoriGalleryQuery();
  const { renderSearch, searchInfo } = useSearch();
  if(!boriGallery) {
    boriGallery = [];
  }
  return (
    <>
      <div className={styles.list_controller}>
        {
          renderSearch()
        }
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