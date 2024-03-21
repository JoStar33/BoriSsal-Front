import MainViewer from '@/components/common/MainViewer/MainViewer';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="보리쌀에 어서와!🐶" description="세상에서 제일 귀여운 강아지 보리를 위한 사이트입니다." />
      <main>
        <MainViewer />
      </main>
    </>
  );
};
export default Home;
