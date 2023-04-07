import StatusContainer from "@/components/common/StatusContainer/StatusContainer";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import OrderController from "./OrderController";

const queryClient = new QueryClient();

const user = userEvent.setup();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <OrderController/>
    </QueryClientProvider>
  );
};

test('화면 전체에 주문반영 확인 테스트', async () => {
  initRender();
  const emailName = await screen.findByText(/jojo@naver.com/);
  const addressName = await screen.findByText(/경기도 군포시/);
  expect(emailName).toBeInTheDocument();
  expect(addressName).toBeInTheDocument();
});


test('검색기능 동작 확인 테스트', async () => {
  initRender();
  const search = screen.getByRole("search");
  const searchButton = screen.getByRole("search-button");
  fireEvent.change(search, {target: { value: "koko" }});
  user.click(searchButton).then(() => {
    const goodsName = screen.findByText(/koko@naver.com/);
    expect(goodsName).toBeInTheDocument();
  });
});
