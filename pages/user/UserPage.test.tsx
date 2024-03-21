import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserPage from './index.page';

const queryClient = new QueryClient();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <UserPage />
    </QueryClientProvider>,
  );
};
test('UserPage 화면 테스트', () => {
  initRender();
  const textCheck = screen.getByText('회원 이메일:');
  expect(textCheck).toBeInTheDocument();
});

test('UserPage 스토어 데이터 반영 테스트', async () => {
  initRender();
  const textCheck = await screen.findByText(/rhwdf@gmail.com/);
  expect(textCheck).toBeInTheDocument();
});
