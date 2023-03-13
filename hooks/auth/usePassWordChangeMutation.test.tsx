import { waitFor, renderHook } from "@testing-library/react";
import { usePassWordChangeMutation } from "./usePassWordChangeMutation";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from 'react-redux';
import { store }from '@/store';
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <Provider store={store}><QueryClientProvider client={queryClient}>{children}</QueryClientProvider></Provider>
  );
};

test('usePassWordChangeMutation 정상동작 확인 테스트', async () => {
  const setState = jest.fn() as any
  const { result } = renderHook(() => usePassWordChangeMutation({id:'', password: '', newPassword: ''}), {
    wrapper: Wrapper,
  });
  await waitFor(() => {
    result.current.mutate();
  }).then(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
});