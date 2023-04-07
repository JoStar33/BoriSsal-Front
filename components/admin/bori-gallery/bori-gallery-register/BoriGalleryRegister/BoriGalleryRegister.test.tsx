import StatusContainer from "@/components/common/StatusContainer/StatusContainer";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import BoriGalleryRegister from "./BoriGalleryRegister";

const queryClient = new QueryClient();

const user = userEvent.setup();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <BoriGalleryRegister/>
    </QueryClientProvider>
  );
};

test('BoriGalleryRegister 등록 성공 테스트', async () => {
  initRender();
  const galleryTitle = screen.getByRole("bori_gallery_title");
  const galleryDesc = screen.getByRole("bori_gallery_desc");
  const galleryRegistButton = screen.getByRole("regist-button");
  fireEvent.change(galleryTitle, {target: { value: "kokoo" }});
  fireEvent.change(galleryDesc, {target: { value: 30000 }});
  user.click(galleryRegistButton).then(() => {
    const successText = screen.findByText(/보리 갤러리 등록이 성공했습니다!/);
    expect(successText).toBeInTheDocument();
  })
});


test('BoriGalleryRegister 누락된 값으로 인한 등록 실패 테스트', async () => {
  initRender();
  const galleryTitle = screen.getByRole("bori_gallery_title");
  const galleryDesc = screen.getByRole("bori_gallery_desc");
  const galleryRegistButton = screen.getByRole("regist-button");
  fireEvent.change(galleryTitle, {target: { value: "" }});
  fireEvent.change(galleryDesc, {target: { value: 30000 }});
  user.click(galleryRegistButton).then(() => {
    const successText = screen.findByText(/이런 제목을 안 설정하셨는데... 다시 확인해주세요!/);
    expect(successText).toBeInTheDocument();
  })
});