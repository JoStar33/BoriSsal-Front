
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Head from "./Header";

const user = userEvent.setup();

test("메인페이지 이동버튼 정상동작 확인.", async () => {
  render(<Head />);
  const goMainPage = screen.getByRole("main-link");
  await user.click(goMainPage);
});
