import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserDeliverAddressPart from './UserDeliverAddressPart';

export default {
  title: '배송주소 컴포넌트 테스트',
  component: UserDeliverAddressPart,
} as ComponentMeta<typeof UserDeliverAddressPart>;

const Template: ComponentStory<typeof UserDeliverAddressPart> = (args) => <UserDeliverAddressPart {...args}></UserDeliverAddressPart>;

export const UserDeliverAddressPartTest = Template.bind({});
UserDeliverAddressPartTest.args = {
  addressInfo: "경기도 안산시 안산동",
  labelInfo: "주소:",
  isAddress: true,
};

export const DetailTest = Template.bind({});
DetailTest.args = {
  addressInfo: "102동 540호",
  labelInfo: "상세주소:",
  isAddress: false,
}