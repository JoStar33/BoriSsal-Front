import { store } from "@/store";
import { QueryClientProvider, QueryClient } from "react-query";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import DuplicateCheckPart from "./DuplicateCheckPart";
import userEvent from "@testing-library/user-event";
const queryClient = new QueryClient();

const user = userEvent.setup();

type propsType = {
  type: boolean;
  info: string;
};

const initRender = ({
  type,
  info
}: propsType) => {
  const setState = jest.fn() as any;
  render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <DuplicateCheckPart
          duplicateState={setState}
          setDuplicateState={setState}
          type={type}
          info={info} 
          validate={null}/>
      </Provider>
    </QueryClientProvider>
  );
};

test("중복 체크가 정상적으로 이루어진 경우 테스트(이메일)", async () => {
  initRender({type: true, info: 'jesttest@naver.com'});
  const duplicateCheckButton = screen.getByRole('button');
  await user.click(duplicateCheckButton);
  const successText = await screen.findByText("사용해도 괜찮은 이메일이네요!");
  expect(successText).toBeInTheDocument();
});


test("중복 체크가 정상적으로 이루어진 경우 테스트(닉네임)", async () => {
  initRender({type: false, info: '호스스'});
  const duplicateCheckButton = screen.getByRole('button');
  await user.click(duplicateCheckButton);
  const successText = await screen.findByText("사용해도 괜찮은 닉네임이네요!");
  expect(successText).toBeInTheDocument();
});