import { useSearch } from './useSearch';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
test("useSearch 기본 동작 확인", async () => {
  let result = {} as ReturnType<typeof useSearch>;
  const Wrapper = () => {
    result = useSearch();
    return result.renderSearch();
  };
  render(<Wrapper />);
  const searchInput = screen.getByRole("search");
  fireEvent.change(searchInput, { target: { value: "테스트" } });
  expect(result.searchInfo).toBe("테스트");
});