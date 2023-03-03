import { ComponentStory, ComponentMeta } from '@storybook/react';
import Head from './Head';

export default {
  title: '헤드 테스트',
  component: Head,
} as ComponentMeta<typeof Head>;

const Template: ComponentStory<typeof Head> = () => <Head />;

export const WidthTest = Template.bind({});