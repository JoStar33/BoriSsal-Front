import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect } from 'react';
import Header from './Header';

export default {
  title: '컴포넌트/일반/헤드 테스트',
  component: Header,
} as ComponentMeta<typeof Header>;

const LoggedInComponent = () => {
  return (<Header />);
}

const NotLoggedInComponent = () => {
  return (<Header />);
}

const NotLoggedInComponentTemplate: ComponentStory<typeof NotLoggedInComponent> = () => <NotLoggedInComponent />;

const LoggedInComponentTemplate: ComponentStory<typeof LoggedInComponent> = () => <LoggedInComponent />;

export const HeaderNotLoggedInTest = NotLoggedInComponentTemplate.bind({});

export const HeaderTest = LoggedInComponentTemplate.bind({});