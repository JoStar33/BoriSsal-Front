import { store } from "@/store";
import { QueryClientProvider, QueryClient } from "react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { server } from "@/mocks/server";
import { rest } from "msw";
import PassWordChangeDialog from "./PassWordChangeDialog";
import userEvent from "@testing-library/user-event";


const queryClient = new QueryClient();

const user = userEvent.setup();


const setState = jest.fn() as any

//이런형태로 중복되는 코드를 위로 빼낼 수 있음.
const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PassWordChangeDialog setDialog={setState}/>
      </Provider>
    </QueryClientProvider>);
  const password = screen.getByRole("password");
  const passwordCheck = screen.getByRole("passwordCheck");
  const newPassword = screen.getByRole("newPassword");
  const newPasswordCheck = screen.getByRole("newPasswordCheck");
  return {
    password, passwordCheck, newPassword, newPasswordCheck
  };
};

test("화면내에 input 이벤트 테스트(동일한 비밀번호)", () => {
  const {password, passwordCheck, newPassword, newPasswordCheck} = initRender();
  fireEvent.change(password, { target: {value: "test123412^^"}});
  fireEvent.change(passwordCheck, { target: {value: "test123412^^"}});
  fireEvent.change(newPassword, { target: {value: "test123412^^"}});
  fireEvent.change(newPasswordCheck, { target: {value: "test123412^^"}});
  const samePassword = screen.getByText(/이런 이전 비밀번호와 동일해요!/);
  expect(samePassword).toBeInTheDocument();
});
test("화면내에 input 이벤트 테스트(비밀번호 확인값과 다를 경우)", () => {
  const {password, passwordCheck, newPassword, newPasswordCheck} = initRender();
  fireEvent.change(password, { target: {value: "test123412^^"}});
  fireEvent.change(passwordCheck, { target: {value: "test123^^"}});
  fireEvent.change(newPassword, { target: {value: "test123412^^"}});
  fireEvent.change(newPasswordCheck, { target: {value: "test123412^^"}});
  const differentPassword = screen.getByText(/비밀번호가 확인값과 다릅니다. 다시입력 해주세요./);
  expect(differentPassword).toBeInTheDocument();
});
test("비밀번호 변경이 성공적으로 이루어졌을 경우", async () => {
  const {password, passwordCheck, newPassword, newPasswordCheck} = initRender();
  fireEvent.change(password, { target: {value: "test123412^^"}});
  fireEvent.change(passwordCheck, { target: {value: "test123412^^"}});
  fireEvent.change(newPassword, { target: {value: "tt12341212^^"}});
  fireEvent.change(newPasswordCheck, { target: {value: "tt12341212^^"}});
  const passwordChange = screen.getByRole("password_change");
  await user.click(passwordChange);
  const success = await screen.findByText("비밀번호 변경 성공!");
  expect(success).toBeInTheDocument();
});
test("비밀번호 변경이 실패했을 경우", async () => {
  const {password, passwordCheck, newPassword, newPasswordCheck} = initRender();
  server.use(
    rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/password`, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  fireEvent.change(password, { target: {value: "test123412^^"}});
  fireEvent.change(passwordCheck, { target: {value: "test123412^^"}});
  fireEvent.change(newPassword, { target: {value: "tt12341212^^"}});
  fireEvent.change(newPasswordCheck, { target: {value: "tt12341212^^"}});
  const passwordChange = screen.getByRole("password_change");
  await user.click(passwordChange);
  const success = await screen.findByText("Request failed with status code 500");
  expect(success).toBeInTheDocument();
});
