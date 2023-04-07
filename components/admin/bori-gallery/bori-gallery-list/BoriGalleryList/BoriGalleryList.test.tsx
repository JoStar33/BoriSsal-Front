import StatusContainer from "@/components/common/StatusContainer/StatusContainer";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import BoriGalleryList from "./BoriGalleryList";

const queryClient = new QueryClient();

const user = userEvent.setup();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <BoriGalleryList/>
    </QueryClientProvider>
  );
};

test('BoriGalleryList 화면 반영 테스트', async () => {
  initRender();
  const galleryTitle = await screen.findByDisplayValue(/제하하하/);
  const galleryDesc = await screen.findByDisplayValue(/크로우즈/);
  expect(galleryTitle).toBeInTheDocument();
  expect(galleryDesc).toBeInTheDocument();
});


test('BoriGalleryList 검색 테스트', async () => {
  initRender();
  const searchInput = screen.getByRole("search");
  const galleryTitle = await screen.findByDisplayValue(/제하하하/);
  fireEvent.change(searchInput, {target: { value: "보리 티셔츠" }});
  expect(galleryTitle).not.toBeInTheDocument();
});
