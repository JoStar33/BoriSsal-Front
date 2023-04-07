import StatusContainer from "@/components/common/StatusContainer/StatusContainer";
import { server } from "@/mocks/server";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import PassWordChangeDialog from "./PassWordChangeDialog";

const queryClient = new QueryClient();

const user = userEvent.setup();

const setState = jest.fn() as any;

//이런형태로 중복되는 코드를 위로 빼낼 수 있음.
const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <PassWordChangeDialog setDialog={setState} />
    </QueryClientProvider>
  );
  const password = screen.getByRole("password");
  const newPassword = screen.getByRole("newPassword");
  const newPasswordCheck = screen.getByRole("newPasswordCheck");
  return {
    password,
    newPassword,
    newPasswordCheck,
  };
};

test("화면내에 input 이벤트 테스트(동일한 비밀번호)", () => {
  const { password, newPassword, newPasswordCheck } =
    initRender();
  fireEvent.change(password, { target: { value: "test123412^^" } });
  fireEvent.change(newPassword, { target: { value: "test123412^^" } });
  fireEvent.change(newPasswordCheck, { target: { value: "test123412^^" } });
  const samePassword = screen.getByText(/이런 이전 비밀번호와 동일해요!/);
  expect(samePassword).toBeInTheDocument();
});
test("화면내에 input 이벤트 테스트(비밀번호 확인값과 다를 경우)", () => {
  const { password, newPassword, newPasswordCheck } =
    initRender();
  fireEvent.change(password, { target: { value: "test123412^^" } });
  fireEvent.change(newPassword, { target: { value: "test1234^^" } });
  fireEvent.change(newPasswordCheck, { target: { value: "test123412^^" } });
  const differentPassword = screen.getByText(
    /비밀번호가 확인값과 다릅니다. 다시입력 해주세요./
  );
  expect(differentPassword).toBeInTheDocument();
});


test("비밀번호 변경이 성공적으로 이루어졌을 경우", async () => {
  const { password, newPassword, newPasswordCheck } =
    initRender();
  fireEvent.change(password, { target: { value: "test123412^^" } });
  fireEvent.change(newPassword, { target: { value: "tt12341212^^" } });
  fireEvent.change(newPasswordCheck, { target: { value: "tt12341212^^" } });
  const passwordChange = screen.getByRole("password_change");
  await user.click(passwordChange);
  const success = await screen.findByRole('success');
  expect(success).toBeInTheDocument();
});


test("비밀번호 변경이 실패했을 경우", async () => {
  const { password, newPassword, newPasswordCheck } =
    initRender();
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/password`,
      (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({
            message: "내부오류"
          }));
      }
    )
  );
  fireEvent.change(password, { target: { value: "test123412^^" } });
  fireEvent.change(newPassword, { target: { value: "tt12341212^^" } });
  fireEvent.change(newPasswordCheck, { target: { value: "tt12341212^^" } });
  const passwordChange = screen.getByRole("password_change");
  user.click(passwordChange).then(() => {
    const success = screen.findByText(
      /내부오류/
    );
    expect(success).toBeInTheDocument();
  });
});
