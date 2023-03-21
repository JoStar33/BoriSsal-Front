import { server } from "@/mocks/server";
import { rest } from "msw";
import { useFindPassWordMutation } from "../useFindPassWordMutation/useFindPassWordMutation";
import { QueryClientProvider, QueryClient } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useFindPassWordMutation 훅 테스트", async () => {
  const { result } = renderHook(() => useFindPassWordMutation('jojo@naver.com'), {
    wrapper: Wrapper,
  });
  await waitFor(() => {
    result.current.mutate();
  }).then(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
});