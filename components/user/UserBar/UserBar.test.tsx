import { store } from "@/store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import UserBar from "./UserBar";
import userEvent from "@testing-library/user-event";
import { setUserState } from "@/store/user";

const setState = jest.fn() as any

//이런형태로 중복되는 코드를 위로 빼낼 수 있음.
const initRender = () => {
  render(
    <Provider store={store}>
      <UserBar/>
    </Provider>);
};
test("유저의 프로필 사진이 없을 경우", () => {
  initRender();
  store.dispatch(setUserState({
    id: "123543",
    email: "rhwd12@fasdgf.sdfa",
    nick: "dsa",
    sns_id: "asdg",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_product_like: [],
    user_bori_gallery_like: []
  }))
  const nonProfile = screen.getByRole('non_profile');
  expect(nonProfile).toBeInTheDocument();
});

test("유저의 프로필 사진이 있을 경우", async () => {
  initRender();
  store.dispatch(setUserState({
    id: "123543",
    email: "rhwd12@fasdgf.sdfa",
    nick: "dsa",
    sns_id: "asdg",
    profile_image: "/isin",
    user_role: 0,
    created_at: new Date(),
    user_product_like: [],
    user_bori_gallery_like: []
  }))
  const nonProfile = await screen.findByRole('profile');
  expect(nonProfile).toBeInTheDocument();
});