
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import UserDeliverAddressPart from "./UserDeliverAddressPart";

const queryClient = new QueryClient();

const user = userEvent.setup();

interface IProps {
  user_id: string;
  addressInfo: string;
  labelInfo: string;
  addressType: string;
};

const initRender = ({
  addressInfo,
  labelInfo,
  addressType,
  user_id,
}: IProps) => {
  render(
    <QueryClientProvider client={queryClient}>
      <UserDeliverAddressPart
        addressInfo={addressInfo}
        labelInfo={labelInfo}
        addressType={addressType}
      />
    </QueryClientProvider>
  );
  const addressValue = screen.getByRole(addressType);
  return {
    addressValue,
  };
};

test("화면내에 텍스트 반영 테스트", () => {
  initRender({
    addressInfo: "경기도 안산시 안산동",
    labelInfo: "주소: ",
    addressType: "address",
    user_id: "23",
  });
  const address = screen.getByText("경기도 안산시 안산동");
  expect(address).toBeInTheDocument();
});

test("화면내에 인풋 반영 테스트", () => {
  initRender({
    addressInfo: "102동 302호",
    labelInfo: "상세주소: ",
    addressType: "address_detail",
    user_id: "23",
  });
  const address = screen.getByDisplayValue("102동 302호");
  expect(address).toBeInTheDocument();
});

test("주소 변경 시도시에", async () => {
  const { addressValue } = initRender({
    addressInfo: "102동 302호",
    labelInfo: "상세주소: ",
    addressType: "address_detail",
    user_id: "23",
  });
  fireEvent.change(addressValue, { target: { value: "102동 555호" } });
  expect(await screen.findByDisplayValue("102동 555호")).toBeInTheDocument();
  const modifyButton = screen.getByRole("modify_address_button");
  await user.click(modifyButton);
  const successText = await screen.findByText("변경 성공!");
  expect(successText).toBeInTheDocument();
});
