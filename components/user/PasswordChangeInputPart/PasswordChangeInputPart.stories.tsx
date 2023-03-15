import { ComponentStory, ComponentMeta } from '@storybook/react';
import PasswordChangeInputPart from './PasswordChangeInputPart';

export default {
  title: '비밀번호 변경 다이얼로그 인풋파트 테스트',
  component: PasswordChangeInputPart,
} as ComponentMeta<typeof PasswordChangeInputPart>;

const Template: ComponentStory<typeof PasswordChangeInputPart> = (args) => <PasswordChangeInputPart {...args} />;

export const PasswordChangeInputPartTest = Template.bind({});
PasswordChangeInputPartTest.args = {
  onChangeAccount: () => {},
  validatePassword: '테스트',
  passType: 'password',
  passInfo: '현재 비밀번호: '
};

