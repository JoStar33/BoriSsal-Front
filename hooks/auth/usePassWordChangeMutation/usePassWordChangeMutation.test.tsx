
import { server } from "@/mocks/server";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
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
  result.current.mutate();
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});

test("usePassWordChangeMutation 정상동작 확인 테스트(실패 케이스)", async () => {
  server.use(    
    rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/password`, (req, res, ctx) => {
      return res(
        ctx.status(500),
      );
    })
  );
  const { result } = renderHook(
    () => usePassWordChangeMutation({password: "", newPassword: "" }),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => expect(result.current.isError).toBeTruthy());
});
