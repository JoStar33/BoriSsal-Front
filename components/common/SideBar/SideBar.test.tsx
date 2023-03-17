import { render, screen } from "@testing-library/react";
import SideBar from "./SideBar";

test("사이드바 텍스트 반영 테스트", () => {
  const setState = jest.fn() as any;
  render(<SideBar setShowSideBar={setState}/>);
  const mainPageText = screen.getByText(/메인 페이지/);
  const goodsPageText = screen.getByText(/굿즈 페이지/);
  const galleryPageText = screen.getByText(/갤러리 페이지/);
  expect(mainPageText).toBeInTheDocument();
  expect(goodsPageText).toBeInTheDocument();
  expect(galleryPageText).toBeInTheDocument();
});