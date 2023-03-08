import { waitFor } from "@testing-library/react";
import { useLoginMutation } from "./useLoginMutation";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from 'react-redux';
import { store }from '@/store';
import { renderHook } from "@testing-library/react";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    /** Recoil의 훅 사용을 위해 RecoilRoot로 컴포넌트를 래핑한다  */
    <Provider store={store}><QueryClientProvider client={queryClient}>{children}</QueryClientProvider></Provider>
  );
};

test('useLoginMutation 정상동작 확인 테스트', async () => {
  const setState = jest.fn() as any
  const { result } = renderHook(() => useLoginMutation({loginInfo: {email: 'test@naver.com', password: '123123123'}, setDialog: setState, setDialogText: setState}), {
    wrapper: Wrapper,
  });
  await waitFor(() => {
    result.current.mutate();
  }).then(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
});


test('useLoginMutation 훅을 통해 store에 정상적으로 유저의 정보가 담겨있는지 확인해보도록 하겠습니다.', async () => {
  const setState = jest.fn() as any
  const { result } = renderHook(() => useLoginMutation({loginInfo: {email: 'test@naver.com', password: '123123123'}, setDialog: setState, setDialogText: setState}), {
    wrapper: Wrapper,
  });
  await waitFor(() => {
    result.current.mutate();
  }).then(() => {
    const state = store.getState().userStore
    expect(state.user.email).toEqual("user12@test.com");
  });
});