import { ComponentStory, ComponentMeta } from '@storybook/react';
import SideBar from './SideBar';

export default {
  title: '사이드바 테스트',
  component: SideBar,
  argTypes: {
  },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args}/>;

export const MainViewerTest = Template.bind({});
