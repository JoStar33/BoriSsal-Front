import { ComponentStory, ComponentMeta } from '@storybook/react';
import ValidateDialog from './ValidateDialog';

export default {
  title: '컴포넌트/다이얼로그/유효성 다이어그램 테스트',
  component: ValidateDialog,
} as ComponentMeta<typeof ValidateDialog>;

const Template: ComponentStory<typeof ValidateDialog> = (args) => <ValidateDialog {...args} />;

export const ValidateDialogTest = Template.bind({});
ValidateDialogTest.args = {
  text: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
};

export const ValidateNiceTest = Template.bind({});
ValidateNiceTest.args = {
  text: "제대로된 텍스트입니다."
};