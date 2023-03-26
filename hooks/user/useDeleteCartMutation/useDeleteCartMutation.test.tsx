import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useDeleteCartMutation } from "./useDeleteCartMutation";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useDeleteCartMutation 훅 테스트", async () => {
  const { result } = renderHook(
    () =>
      useDeleteCartMutation('23'),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});
