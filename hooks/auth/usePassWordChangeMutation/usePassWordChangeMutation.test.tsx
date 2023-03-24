
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { usePassWordChangeMutation } from "./usePassWordChangeMutation";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("usePassWordChangeMutation 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => usePassWordChangeMutation({password: "", newPassword: "" }),
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
