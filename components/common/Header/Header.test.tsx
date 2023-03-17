import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Head from "./Header";
import { Provider } from "react-redux";
import { store } from "@/store";

const user = userEvent.setup();

test("메인페이지 이동버튼 정상동작 확인.", async () => {
  render(<Provider store={store}><Head /></Provider>);
  const goMainPage = screen.getByRole("main-link");
  await user.click(goMainPage);
});
