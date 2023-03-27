
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useProfileUpdateMutation } from "./useProfileUpdateMutation";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useProfileUpdateMutation 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => useProfileUpdateMutation(),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate(new FormData());
  await waitFor(() => result.current.isSuccess);
});
