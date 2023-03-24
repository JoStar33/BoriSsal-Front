
import { useUserStore } from "@/store/user";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useUserQuery } from "./useUserQuery";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useUserQuery 정상동작 확인 테스트", async () => {
  const current = renderHook(() => useUserStore());
  global.window = Object.create(window);
  const url = "http://example.com/?user_id=23";
  Object.defineProperty(window, "location", {
    value: {
      href: url,
    },
  });
  expect(window.location.href).toEqual(url);
  const setState = jest.fn() as any;
  const { result } = renderHook(
    () => useUserQuery({ setDialog: setState, setDialogText: setState }),
    {
      wrapper: Wrapper,
    }
  );
  await waitFor(() => expect(result.current.isSuccess).toBe(true)).then(() => {
    const state = current.result.current;
    expect(state.user.id).toEqual("23");
    expect(state.user.email).toEqual("rhwdf@gmail.com");
    expect(state.user.nick).toEqual("우하하");
  });
});
