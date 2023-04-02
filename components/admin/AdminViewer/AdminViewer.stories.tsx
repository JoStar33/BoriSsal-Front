import { ComponentMeta, ComponentStory } from '@storybook/react';
import AdminViewer from './AdminViewer';

export default {
  title: '컴포넌트/어드민/어드민 뷰어 화면',
  component: AdminViewer,
} as ComponentMeta<typeof AdminViewer>;

const Template: ComponentStory<typeof AdminViewer> = () => <AdminViewer />;

export const AdminViewerTest = Template.bind({});