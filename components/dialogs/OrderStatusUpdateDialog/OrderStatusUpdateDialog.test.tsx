import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import OrderStatusUpdateDialog from "./OrderStatusUpdateDialog";

const queryClient = new QueryClient();

const user = userEvent.setup();

const setState = jest.fn() as any;

//이런형태로 중복되는 코드를 위로 빼낼 수 있음.
const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <OrderStatusUpdateDialog setDialog={setState} order_id={"23"} />
    </QueryClientProvider>
  );
};

test("주문 상태 변경 다이얼로그 기본 화면 테스트", () => {
  initRender();
  const deliverReady = screen.getByText(/배송준비/);
  const deliverOn = screen.getByText(/배송중/);
  const deliverOver = screen.getByText(/배송완료/);
  expect(deliverReady).toBeInTheDocument();
  expect(deliverOn).toBeInTheDocument();
  expect(deliverOver).toBeInTheDocument();
});