import { useDuplicateCheckMutation } from "../useDuplicateCheckMutation/useDuplicateCheckMutation";
import { QueryClientProvider, QueryClient } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
const queryClient = new QueryClient();


const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useDuplicateCheckMutation 훅 테스트", async () => {
  const { result } = renderHook(
    () =>
    useDuplicateCheckMutation({
        type: true,
        info: 'rhwkd5012'
      }),
    {
      wrapper: Wrapper,
    }
  );
  await waitFor(() => {
    result.current.mutate();
  }).then(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
});