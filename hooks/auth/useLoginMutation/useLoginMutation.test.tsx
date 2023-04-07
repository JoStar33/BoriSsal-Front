import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useLoginMutation } from "./useLoginMutation";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useLoginMutation 정상동작 확인 테스트", async () => {
  const setState = jest.fn() as any;
  const { result } = renderHook(
    () =>
      useLoginMutation({
        loginInfo: { email: "test@naver.com", password: "123123123" }
      }),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => 
    expect(result.current.isSuccess).toBeTruthy()
  );
});

test("useLoginMutation 훅을 통해 store에 정상적으로 유저의 정보가 담겨있는지 확인해보도록 하겠습니다.", async () => {
  const { result } = renderHook(
    () =>
      useLoginMutation({
        loginInfo: { email: "test@naver.com", password: "123123123" }
      }),
    {
      wrapper: Wrapper,
    }
  );
  await waitFor(() => {
    result.current.mutate();
  }).then(() => {
    //expect(current.result.current.user.email).toEqual("user12@test.com");
  });
});
