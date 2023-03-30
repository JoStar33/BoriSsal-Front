
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useCategoryQuery } from "./useCategoryQuery";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const initRender = () => {
  const { result } = renderHook(
    () => useCategoryQuery(),
    {
      wrapper: Wrapper,
    }
  );
  return result;
}


test("useCategoryQuery 정상동작 확인 테스트", async () => {
  const result = initRender();
  await waitFor(() => 
    expect(result.current.isSuccess).toBeTruthy()
  );
  if(!result.current.data)
    return;
  expect(result.current.data[1].category_name).toBe('학용품');
});

