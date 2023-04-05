import { render, screen } from "@testing-library/react";
import MainViewer from "./MainViewer";

describe("메인페이지 테스트", () => {
  test("메인페이지 텍스트 반영 테스트", () => {
    render(<MainViewer />);
    const mainText = screen.getByText(/보리쌀에 온걸 환영해/);
    expect(mainText).toBeInTheDocument();
    const subText = screen.getByText(
      /보리는 세상에서 제일 귀여운 강아지입니다./
    );
    expect(subText).toBeInTheDocument();
  });
});
