import { server } from "@/mocks/server";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { useDeliverAddressMutation } from "./useDeliverAddressMutation";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useDeliverAddressMutation 훅 테스트", async () => {
  const { result } = renderHook(
    () =>
      useDeliverAddressMutation({
        address_info: "01033334444",
        address_type: "phone_number",
      }),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});

test("useDeliverAddressMutation 훅 테스트 (실패 케이스)", async () => {
  server.use(
    rest.patch(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/deliver-address`, (req, res, ctx) => {
      return res(
        ctx.status(500)
      )
    })
  );
  const { result } = renderHook(
    () =>
      useDeliverAddressMutation({
        address_info: "01033334444",
        address_type: "phone_number",
      }),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => expect(result.current.isError).toBeTruthy());
});
