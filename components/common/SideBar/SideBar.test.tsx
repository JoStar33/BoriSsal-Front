import { render, screen } from "@testing-library/react";
import SideBar from "./SideBar";

test("사이드바 텍스트 반영 테스트", () => {
  const setState = jest.fn() as any;
  render(<SideBar setShowSideBar={setState}/>);
  const mainPageText = screen.getByText(/Main/);
  const goodsPageText = screen.getByText(/Goods/);
  const galleryPageText = screen.getByText(/Gallery/);
  expect(mainPageText).toBeInTheDocument();
  expect(goodsPageText).toBeInTheDocument();
  expect(galleryPageText).toBeInTheDocument();
});