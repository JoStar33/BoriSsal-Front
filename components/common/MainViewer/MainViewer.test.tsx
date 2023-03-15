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
  test("이미지 반영 테스트", () => {
    render(<MainViewer />);
    const image1 = screen.getByRole("image_test1");
    expect(image1).toHaveStyle({
      width: "25vw",
      height: "35vw",
    });
    const image2 = screen.getByRole("image_test2");
    expect(image2).toHaveStyle({
      width: "23vw",
      height: "37vw",
    });
    const image3 = screen.getByRole("image_test3");
    expect(image3).toBeDefined();
    expect(image3).toHaveStyle({
      width: "100%",
      height: "100%",
    });
  });
});
