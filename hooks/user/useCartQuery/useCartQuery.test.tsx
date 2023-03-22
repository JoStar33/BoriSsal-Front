import { server } from "@/mocks/server";
import { rest } from "msw";
import { QueryClientProvider, QueryClient } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { useCartQuery } from "./useCartQuery";
import { Provider } from "react-redux";
import { store } from "@/store";
import { errorMessage } from "@/apis/error/customError";
import { AxiosError } from "axios";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
};

test("useCartQuery 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => useCartQuery(),
    {
      wrapper: Wrapper,
    }
  );
  await waitFor(() => expect(result.current.isSuccess).toBe(true)).then(() => {
    expect(result.current.data?.data.bori_goods_name).toEqual(
      "보리 펜"
    );
  });
});

