import StatusContainer from "@/components/common/StatusContainer/StatusContainer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import BoriGalleryDetailInfo from "./BoriGalleryDetailInfo";

const user = userEvent.setup();

const queryClient = new QueryClient();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <BoriGalleryDetailInfo 
      user={{
        email: "",
        nick: "",
        sns_id: "",
        profile_image: "",
        created_at: new Date(),
        user_bori_goods_like: [],
        user_bori_gallery_like: []
      }}
      gallery={{
        _id: '234',
        bori_gallery_title: '제하하하',
        bori_gallery_desc: '크로우즈',
        bori_gallery_like: 3,
        bori_gallery_image: '/none',
        created_at: new Date()
      }}/>
    </QueryClientProvider>)
};

test('BoriGalleryDetailInfo 화면 렌더링 반영 테스트', async () => {
  initRender();
  const boriGalleryTitle = await screen.findByText(/제하하하/);
  const contentInfo = await screen.findByText(/크로우즈/);
  expect(boriGalleryTitle).toBeInTheDocument();
  expect(contentInfo).toBeInTheDocument();
});