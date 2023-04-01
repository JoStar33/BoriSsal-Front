import { IBoriGallery } from "@/types/boriGallery";
import { getBoriGallery } from '@/apis/bori-gallery/boriGallery';
import { AxiosError } from "axios";
import { errorMessage } from "@/apis/error/customError";
import ErrorPage from "@/components/error/ErrorPage/ErrorPage";
import { useSearch } from "@/hooks/common/useSearch/useSearch";
import styles from './bori_gallery_page.module.scss';
import BoriGalleryItem from "@/components/bori-gallery/BoriGalleryItem/BoriGalleryItem";

interface IProps {
  galleryData: IBoriGallery[];
  errorMessage: string;
}

const BoriGalleryPage = ({galleryData, errorMessage}: IProps) => {
  const { searchInfo, renderSearch } = useSearch();
  if (errorMessage) {
    return <ErrorPage errorText={errorMessage}></ErrorPage>
  }
  return (
    <div className={styles.bori_gallery_page_container}>
      <h1>보리 갤러리</h1>
      <div className={styles.user_place}>
        {
          renderSearch()
        }
      </div>
      <div className={styles.bori_gallery_container}>
        {
          galleryData
          .filter((searchGallery) =>
            searchGallery.bori_gallery_title.includes(searchInfo)
          ).map((gallery) => 
            <BoriGalleryItem 
              key={gallery._id}
              gallery={gallery}
            />)
        }
      </div>
    </div>
  );
};

export default BoriGalleryPage;

export async function getStaticProps() {
  let galleryData: IBoriGallery[] = [];
  let galleryErrorMessage = null;
  await getBoriGallery()
    .then((res) => {
      galleryData = res;
    }).catch((error: AxiosError) => {
      galleryErrorMessage = errorMessage(error)
    });
  return {
    props: { galleryData, galleryErrorMessage },
    revalidate: 5 /** https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration */,
  };
}
