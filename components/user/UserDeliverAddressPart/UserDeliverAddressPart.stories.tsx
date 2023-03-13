import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserDeliverAddressPart from './UserDeliverAddressPart';
import { Provider } from 'react-redux';
import { store }from '@/store';
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

export default {
  title: '배송주소 컴포넌트 테스트',
  component: UserDeliverAddressPart,
} as ComponentMeta<typeof UserDeliverAddressPart>;

const Template: ComponentStory<typeof UserDeliverAddressPart> = (args) => <QueryClientProvider client={queryClient}><Provider store={store}><UserDeliverAddressPart {...args}></UserDeliverAddressPart></Provider></QueryClientProvider>;

export const UserDeliverAddressPartTest = Template.bind({});
UserDeliverAddressPartTest.args = {
  addressInfo: "경기도 안산시 안산동",
  labelInfo: "주소:",
  addressType: 'address',
};

export const DetailTest = Template.bind({});
DetailTest.args = {
  addressInfo: "102동 540호",
  labelInfo: "상세주소:",
  addressType: 'address_detail',
}