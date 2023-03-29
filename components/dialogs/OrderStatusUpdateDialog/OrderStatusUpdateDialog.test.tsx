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

test("화면내에 input 이벤트 테스트(동일한 비밀번호)", () => {
  initRender();
  fireEvent.change(password, { target: { value: "test123412^^" } });
  fireEvent.change(passwordCheck, { target: { value: "test123412^^" } });
  fireEvent.change(newPassword, { target: { value: "test123412^^" } });
  fireEvent.change(newPasswordCheck, { target: { value: "test123412^^" } });
  const samePassword = screen.getByText(/이런 이전 비밀번호와 동일해요!/);
  expect(samePassword).toBeInTheDocument();
});
test("화면내에 input 이벤트 테스트(비밀번호 확인값과 다를 경우)", () => {
  initRender();
  fireEvent.change(password, { target: { value: "test123412^^" } });
  fireEvent.change(passwordCheck, { target: { value: "test123^^" } });
  fireEvent.change(newPassword, { target: { value: "test123412^^" } });
  fireEvent.change(newPasswordCheck, { target: { value: "test123412^^" } });
  const differentPassword = screen.getByText(
    /비밀번호가 확인값과 다릅니다. 다시입력 해주세요./
  );
  expect(differentPassword).toBeInTheDocument();
});