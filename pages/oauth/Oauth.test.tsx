import { store } from "@/store";
import { waitFor, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import Oauth from "./index.page";

const queryClient = new QueryClient();

test("Oauth 화면 테스트", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Oauth />
      </Provider>
    </QueryClientProvider>
  );
  const textCheck = screen.getByText("잠시 기다려주세요!");
  expect(textCheck).toBeInTheDocument();
});

test("Oauth 데이터 정상 처리 테스트", async () => {
  global.window = Object.create(window);
  const url = "http://example.com/?user_id=23";
  Object.defineProperty(window, "location", {
    value: {
      href: url,
    },
  });
  expect(window.location.href).toEqual(url);
  render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Oauth />
      </Provider>
    </QueryClientProvider>
  );
  await waitFor(() =>
    expect(store.getState().userStore.user.email).toBe("rhwdf@gmail.com")
  );
  expect(store.getState().userStore.user.nick).toEqual("우하하");
});
