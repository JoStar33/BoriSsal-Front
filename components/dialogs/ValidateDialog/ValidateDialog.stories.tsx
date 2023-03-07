import { ComponentStory, ComponentMeta } from '@storybook/react';
import ValidateDialog from './ValidateDialog';

export default {
  title: '유효성 다이어그램 테스트',
  component: ValidateDialog,
} as ComponentMeta<typeof ValidateDialog>;

const Template: ComponentStory<typeof ValidateDialog> = (args) => <ValidateDialog {...args} />;

export const DialogTest = Template.bind({});
DialogTest.args = {
  text: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
};

export const NiceTest = Template.bind({});
DialogTest.args = {
  text: "제대로된 텍스트입니다."
};