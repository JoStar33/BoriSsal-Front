import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainViewer from './MainViewer';

export default {
  title: '메인뷰 테스트',
  component: MainViewer,
  argTypes: {
  },
} as ComponentMeta<typeof MainViewer>;

const Template: ComponentStory<typeof MainViewer> = () => <MainViewer />;

export const MainViewerTest = Template.bind({});
