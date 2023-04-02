import BoriGalleryEmpty from "@/components/bori-gallery/BoriGalleryEmpty/BoriGalleryEmpty";
import BoriGalleryItemSkeleton from "@/components/loading/admin/BoriGalleryItemSkeleton/BoriGalleryItemSkeleton";
import { useBoriGalleryQuery } from "@/hooks/bori-gallery/useBoriGalleryQuery/useBoriGalleryQuery";
import { useSearch } from "@/hooks/common/useSearch/useSearch";
import styles from '../../../bori-goods/bori-goods-list/BoriGoodsList/bori_goods_list.module.scss';
import GalleryListItem from "../GalleryListItem/GalleryListItem";

const BoriGalleryList = () => {
  let { data: boriGallery, isLoading } = useBoriGalleryQuery();
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
          isLoading 
          ? new Array(3)
            .fill(1)
            .map((_, index) => <BoriGalleryItemSkeleton key={index}/>)
          : boriGallery.length === 0
            ? <BoriGalleryEmpty/>
            : boriGallery
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