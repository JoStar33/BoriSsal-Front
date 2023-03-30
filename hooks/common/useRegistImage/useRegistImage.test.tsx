import { useRegistImage } from './useRegistImage';
import { render } from '@testing-library/react';
import React from 'react';
test("useRegistImage 기본 동작 확인", () => {
  let result = {} as ReturnType<typeof useRegistImage>;
  const Wrapper = () => {
    result = useRegistImage();
    return null;
  };
  render(<Wrapper />);
  result.formData.current.append("jojo", "jostar");
  expect(result.formData.current.get("jojo")).toBe("jostar")
});

