import { ComponentStory, ComponentMeta } from '@storybook/react';
import SuccessDialog from './SuccessDialog';

export default {
  title: '성공 다이어그램 테스트',
  component: SuccessDialog,
} as ComponentMeta<typeof SuccessDialog>;

const Template: ComponentStory<typeof SuccessDialog> = (args) => <SuccessDialog {...args} />;

export const SuccessDialogTest = Template.bind({});
SuccessDialogTest.args = {
  text: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
};

export const SuccessNiceTest = Template.bind({});
SuccessNiceTest.args = {
  text: "제대로된 텍스트입니다."
};