import { getBoriGallery } from '@/apis/bori-gallery/boriGallery';
import { errorMessage } from '@/apis/error/customError';
import BoriGalleryItem from '@/components/bori-gallery/BoriGalleryItem/BoriGalleryItem';
import ErrorPage from '@/components/error/ErrorPage/ErrorPage';
import { useSearch } from '@/hooks/common/useSearch/useSearch';
import { IBoriGallery } from '@/types/boriGallery';
import { AxiosError } from 'axios';
import { NextSeo } from 'next-seo';
import styles from './bori_gallery_page.module.scss';

interface IProps {
  galleryData: IBoriGallery[];
  errorMessage: string;
}

const BoriGalleryPage = ({ galleryData, errorMessage }: IProps) => {
  const { searchInfo, renderSearch } = useSearch();

  if (errorMessage) {
    return <ErrorPage errorText={errorMessage} />;
  }

  return (
    <>
      <NextSeo
        title="보리 갤러리"
        description="보리의 근황을 담은 다양한 사진들이 넘쳐흐르는 공간이에요. 보리를 보면서 편하게 힐링하세요~"
      />
      <div className={styles.bori_gallery_page_container}>
        <h1>보리 갤러리</h1>
        <div className={styles.user_place}>{renderSearch()}</div>
        <div className={styles.bori_gallery_container}>
          {galleryData
            .filter((searchGallery) => searchGallery.bori_gallery_title.includes(searchInfo))
            .map((gallery) => (
              <BoriGalleryItem key={gallery._id} gallery={gallery} />
            ))}
        </div>
      </div>
    </>
  );
};

export default BoriGalleryPage;

export async function getStaticProps() {
  let galleryData: IBoriGallery[] = [];
  let galleryErrorMessage = null;
  await getBoriGallery()
    .then((res) => {
      galleryData = res;
    })
    .catch((error: AxiosError) => {
      galleryErrorMessage = errorMessage(error);
    });
  return {
    props: { galleryData, galleryErrorMessage },
    revalidate: 5 /** https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration */,
  };
}
