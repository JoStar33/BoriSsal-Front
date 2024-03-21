import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserDeliverAddressPart from './UserDeliverAddressPart';
const queryClient = new QueryClient();

export default {
  title: '컴포넌트/사용자/배송주소 컴포넌트 테스트',
  component: UserDeliverAddressPart,
} as ComponentMeta<typeof UserDeliverAddressPart>;

const Template: ComponentStory<typeof UserDeliverAddressPart> = (args) => (
  <QueryClientProvider client={queryClient}>
    <UserDeliverAddressPart {...args} />
  </QueryClientProvider>
);

export const UserDeliverAddressPartTest = Template.bind({});
UserDeliverAddressPartTest.args = {
  addressInfo: '경기도 안산시 안산동',
  labelInfo: '주소:',
  addressType: 'address',
};

export const DetailTest = Template.bind({});
DetailTest.args = {
  addressInfo: '102동 540호',
  labelInfo: '상세주소:',
  addressType: 'address_detail',
};
