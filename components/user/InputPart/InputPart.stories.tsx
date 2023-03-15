import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputPart from './InputPart';

export default {
  title: '비밀번호 변경 다이얼로그 인풋파트 테스트',
  component: InputPart,
} as ComponentMeta<typeof InputPart>;

const Template: ComponentStory<typeof InputPart> = (args) => <InputPart {...args} />;

export const InputPartTest = Template.bind({});
InputPartTest.args = {
  onChangeAccount: () => {},
  validate: '테스트',
  type: 'password',
  info: '현재 비밀번호: ',
  textOrPass: 'pass'
};

