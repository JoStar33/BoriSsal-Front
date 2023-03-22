import { QueryClientProvider, QueryClient } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { useProfileUpdateMutation } from "./useProfileUpdateMutation";
import { Provider } from "react-redux";
import { store } from "@/store";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
};

test("useProfileUpdateMutation 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => useProfileUpdateMutation(new FormData()),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
});
