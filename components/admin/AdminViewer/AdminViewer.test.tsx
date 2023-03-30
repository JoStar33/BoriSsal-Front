import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import AdminViewer from "./AdminViewer";

const queryClient = new QueryClient();

const user = userEvent.setup();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <AdminViewer/>
    </QueryClientProvider>
  );
};

test('AdminViewer 각화면 정상동작 테스트(boriGoods)', async () => {
  initRender();
  const boriGoodsButton = screen.getByRole("boriGoodsShow");
  user.click(boriGoodsButton).then(() => {
    const RegisterViewer = screen.findByText(/굿즈명:/);
    expect(RegisterViewer).toBeInTheDocument();
  })
});

test('AdminViewer 각화면 정상동작 테스트(goodsList)', async () => {
  initRender();
  const goodsListButton = screen.getByRole("goodsListShow");
  user.click(goodsListButton).then(() => {
    const RegisterViewer = screen.findByText(/카테고리:/);
    expect(RegisterViewer).toBeInTheDocument();
  })
});

test('AdminViewer 각화면 정상동작 테스트(boriGallery)', async () => {
  initRender();
  const boriGoodsButton = screen.getByRole("boriGalleryShow");
  user.click(boriGoodsButton).then(() => {
    const RegisterViewer = screen.findByText(/갤러리 설명/);
    expect(RegisterViewer).toBeInTheDocument();
  })
});

test('AdminViewer 각화면 정상동작 테스트(galleryList)', async () => {
  initRender();
  const galleryListButton = screen.getByRole("galleryListShow");
  user.click(galleryListButton).then(() => {
    const RegisterViewer = screen.findByText(/검색:/);
    expect(RegisterViewer).toBeInTheDocument();
  })
});

test('AdminViewer 각화면 정상동작 테스트(orderControl)', async () => {
  initRender();
  const orderControlButton = screen.getByRole("orderControlShow");
  user.click(orderControlButton).then(() => {
    const RegisterViewer = screen.findByText(/시작일:/);
    expect(RegisterViewer).toBeInTheDocument();
  })
});