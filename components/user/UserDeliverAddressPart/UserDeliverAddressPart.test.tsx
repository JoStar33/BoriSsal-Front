import { store } from "@/store";
import { QueryClientProvider, QueryClient } from "react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { server } from "@/mocks/server";
import { rest } from "msw";
import UserDeliverAddressPart from "./UserDeliverAddressPart";
import userEvent from "@testing-library/user-event";


const queryClient = new QueryClient();

const user = userEvent.setup();

const setState = jest.fn() as any

type propsType = {
  user_id: string,
  addressInfo: string,
  labelInfo: string,
  addressType: string,
}

const initRender = ({addressInfo, labelInfo, addressType, user_id}: propsType) => {
  render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <UserDeliverAddressPart user_id={user_id} addressInfo={addressInfo} labelInfo={labelInfo} addressType={addressType}/>
      </Provider>
    </QueryClientProvider>);
  const addressValue = screen.getByRole(addressType);
  return {
    addressValue
  };
};

test("화면내에 텍스트 반영 테스트", () => {
  initRender({addressInfo: '경기도 안산시 안산동', labelInfo: '주소: ', addressType: 'address', user_id: '23'});
  const address = screen.getByText('경기도 안산시 안산동');
  expect(address).toBeInTheDocument();
});

test("화면내에 인풋 반영 테스트", () => {
  initRender({addressInfo: '102동 302호', labelInfo: '상세주소: ', addressType: 'address_detail', user_id: '23'});
  const address = screen.getByDisplayValue('102동 302호');
  expect(address).toBeInTheDocument();
});