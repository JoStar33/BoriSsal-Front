import StatusContainer from "@/components/common/StatusContainer/StatusContainer";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import GalleryListItem from "./GalleryListItem";

const queryClient = new QueryClient();

const user = userEvent.setup();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <GalleryListItem boriGallery={{
          _id: '23',
          bori_gallery_title: '제하하하',
          bori_gallery_desc: '크로우즈',
          bori_gallery_like: 3,
          bori_gallery_image: '/none',
          created_at: new Date()
        }} />
    </QueryClientProvider>
  );
};

test('GalleryListItem 화면 반영 테스트', () => {
  initRender();
  const galleryTitle = screen.getByDisplayValue(/제하하하/);
  const galleryDesc = screen.getByDisplayValue(/크로우즈/);
  expect(galleryTitle).toBeInTheDocument();
  expect(galleryDesc).toBeInTheDocument();
});

test('GalleryListItem 굿즈 이름이 없는 상태로 수정을 할시', () => {
  initRender();
  const galleryTitle = screen.getByDisplayValue(/제하하하/);
  fireEvent.change(galleryTitle, {target: { value: "" }});
  const updateGalleryButton = screen.getByRole("update-gallery");
  user.click(updateGalleryButton).then(() => {
    const noti = screen.findByText(/값을 비운 상태로 수정이 불가능합니다./);
    expect(noti).toBeInTheDocument();
  });
});

