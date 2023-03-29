import { useDialog } from './useDialog';
import { render, screen } from '@testing-library/react';
import React from 'react';
test("useDialog 기본 동작 확인", () => {
  let result = {} as ReturnType<typeof useDialog>;
  const Wrapper = () => {
    result = useDialog();
    return null;
  };
  render(<Wrapper />);
  result.setDialog(false);
  expect(result.dialog).toBeFalsy();
});


test("useDialog를 통한 다이얼로그 오픈 확인", async () => {
  let result = {} as ReturnType<typeof useDialog>;
  const Wrapper = () => {
    result = useDialog();
    return result.renderDialog();
  };
  render(<Wrapper />);
  result.setDialogText('테스트 다이얼로그');
  const testText = await screen.findByText(/테스트 다이얼로그/)
  expect(testText).toBeInTheDocument();
})