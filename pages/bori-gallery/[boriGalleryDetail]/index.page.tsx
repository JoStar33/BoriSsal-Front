import { getBoriGallery } from '@/apis/bori-gallery/boriGallery';
import { errorMessage } from '@/apis/error/customError';
import BoriGalleryDetailInfo from '@/components/bori-gallery/BoriGalleryDetailInfo/BoriGalleryDetailInfo';
import ErrorPage from '@/components/error/ErrorPage/ErrorPage';
import ReplyLoading from '@/components/loading/ReplyLoading/ReplyLoading';
import ReplyViewer from '@/components/reply/ReplyViewer/ReplyViewer';
import { useBoriGalleryReplyQuery } from '@/hooks/bori-gallery/useBoriGalleryReplyQuery/useBoriGalleryReplyQuery';
import { useUserQuery } from '@/hooks/user/useUserQuery/useUserQuery';
import { IBoriGallery } from '@/types/boriGallery';
import { initReplyMutation, initUser } from '@/utils/initData';
import { AxiosError } from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useMemo, useState } from 'react';

interface IProps {
  gallery: IBoriGallery;
  galleryErrorMessage: string;
}

const BoriGalleryDetail = ({ gallery, galleryErrorMessage }: IProps) => {
  const galleryId = useMemo(() => {
    if (!gallery) {
      return 'none';
    }
    return gallery._id;
  }, [gallery]);
  const [limit, setLimit] = useState(1);
  let { data: user } = useUserQuery();
  let { data: boriGalleryReply, isLoading, refetch, error } = useBoriGalleryReplyQuery(galleryId, limit);
  if (!user) {
    user = initUser;
  }
  if (!boriGalleryReply) {
    boriGalleryReply = initReplyMutation;
  }
  if (galleryErrorMessage) {
    return <ErrorPage error={error} errorText={galleryErrorMessage} />;
  }
  return (
    <>
      <NextSeo title={`${gallery.bori_gallery_title}`} description={`${gallery.bori_gallery_desc}`} />
      <div>
        <BoriGalleryDetailInfo gallery={gallery} user={user} />
        {isLoading && <ReplyLoading />}
        {!isLoading && (
          <ReplyViewer
            user={user}
            gallery_id={gallery._id}
            mutationData={boriGalleryReply}
            limit={0}
            setLimit={setLimit}
            refetch={refetch}
          />
        )}
      </div>
    </>
  );
};

export default BoriGalleryDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  let galleryData: IBoriGallery[] = [];
  await getBoriGallery().then((res) => {
    galleryData = res;
  });
  const paths = galleryData.map((gallery) => ({
    params: { boriGalleryDetail: gallery._id },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let galleryData: IBoriGallery[] = [];
  let galleryErrorMessage = null;
  if (!params) {
    return {
      props: {
        galleryErrorMessage: '잘못된 정보입니다.',
      },
    };
  }
  await getBoriGallery()
    .then((res) => {
      galleryData = res;
    })
    .catch((error: AxiosError) => {
      galleryErrorMessage = errorMessage(error);
    });
  const gallery = galleryData.find((gallery) => gallery._id === params.boriGalleryDetail);
  if (!gallery) {
    return {
      props: {
        galleryErrorMessage: '갤러리 데이터가 존재하지 않습니다.',
      },
    };
  }
  return {
    props: {
      gallery,
      galleryErrorMessage,
    },
  };
};
