import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from 'react-redux';
import { store }from '@/store';
import { renderHook, waitFor } from "@testing-library/react";
import { useUserQuery } from "./useUserQuery";
const queryClient = new QueryClient();


const Wrapper = ({ children }: any) => {
  return (
    /** Recoil의 훅 사용을 위해 RecoilRoot로 컴포넌트를 래핑한다  */
    <Provider store={store}><QueryClientProvider client={queryClient}>{children}</QueryClientProvider></Provider>
  );
};

test('useUserQuery 정상동작 확인 테스트', async () => {
  global.window = Object.create(window);
  const url = "http://example.com/?id=23";
  Object.defineProperty(window, 'location', {
    value: {
      href: url
    }
  });
  expect(window.location.href).toEqual(url);
  const setState = jest.fn() as any
  const { result } = renderHook(() => useUserQuery({setDialog: setState, setDialogText: setState}), {
    wrapper: Wrapper,
  });
  await waitFor(() => {
    result.current.data
  }).then(() => {
    const state = store.getState().userStore;
    console.log(state.user);
    expect(state.user.id).toEqual("23");
    expect(state.user.email).toEqual("rhwdf@gmail.com");
    expect(state.user.nick).toEqual("우하하");
  });
});