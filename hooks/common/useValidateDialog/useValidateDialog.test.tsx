import { render, screen } from '@testing-library/react';
import { useValidateDialog } from './useValidateDialog';
test("useValidateDialog 기본 동작 확인", () => {
  let result = {} as ReturnType<typeof useValidateDialog>;
  const Wrapper = () => {
    result = useValidateDialog();
    return null;
  };
  render(<Wrapper />);
  result.setDialog(false);
  expect(result.dialog).toBeFalsy();
});


test("useValidateDialog를 통한 다이얼로그 오픈 확인", async () => {
  let result = {} as ReturnType<typeof useValidateDialog>;
  const Wrapper = () => {
    result = useValidateDialog();
    return result.renderDialog();
  };
  render(<Wrapper />);
  result.dialogText.current = '테스트 다이얼로그';
  const testText = await screen.findByText(/테스트 다이얼로그/)
  expect(testText).toBeInTheDocument();
})