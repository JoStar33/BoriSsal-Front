import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReplyViewer from "./ReplyViewer";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import { store } from "@/store";
import { setUserState } from "@/store/user";
const replyInit = [{
  _id: 'string',
  user_id: 'string',
  email: 'string',
  content: 'string',
  reply_child: [],
  created_at: String(new Date()),
}, {
  _id: 'string',
  user_id: 'string',
  email: 'string',
  content: 'string',
  reply_child: [],
  created_at:  String(new Date())
}];
const queryClient = new QueryClient();
const user = userEvent.setup();


const initRender = () => {
  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReplyViewer goods_id={"23"} reply={replyInit}></ReplyViewer>
      </QueryClientProvider>
    </Provider>
  );
}

test("화면 반영 테스트", () => {
  initRender();
  const replyText = screen.getByText(/댓글:/);
  const replyRegistButton = screen.getByText(/댓글 등록/);
  expect(replyText).toBeInTheDocument();
  expect(replyRegistButton).toBeInTheDocument();
});

test("댓글 입력후 댓글 등록시에 (로그인을 하지 않았을시에)", async () => {
  initRender();
  const replyRegistButton = screen.getByRole('regist');
  fireEvent.change(replyRegistButton, { target: { value: "test123412^^" } });
  await user.click(replyRegistButton);
  const notLoginText = await screen.findByText(/로그인후 이용해주세요!/);
  expect(notLoginText).toBeInTheDocument();
});


test("댓글 등록시에 (댓글의 글자가 없을경우)", async () => {
  store.dispatch(setUserState({
    id: "53645",
    email: "jojo@naver.com",
    nick: "jojo",
    sns_id: "joster",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_product_like: [],
    user_bori_gallery_like: []
  }))
  initRender();
  const replyRegistButton = screen.getByRole('regist');
  fireEvent.change(replyRegistButton, { target: { value: "" } });
  await user.click(replyRegistButton);
  const notLoginText = await screen.findByText(/최소 두글자는 입력해주세요!/);
  expect(notLoginText).toBeInTheDocument();
});