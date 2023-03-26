
import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeaderUserPart from './HeaderUserPart';

export default {
  title: '컴포넌트/일반/헤더 구분 영역',
  component: HeaderUserPart,
} as ComponentMeta<typeof HeaderUserPart>;

const HeaderUserPartLoggedInComponent = () => {
  return (<HeaderUserPart />);
};

const HeaderNotLoggedInComponent = () => {
  return (<HeaderUserPart />);
}

const HeaderLoggedInComponentTemplate: ComponentStory<typeof HeaderUserPartLoggedInComponent> = () => <HeaderUserPartLoggedInComponent />;
export const HeaderNotLoggedInTest = HeaderLoggedInComponentTemplate.bind({});

const HeaderNotLoggedInComponentTemplate: ComponentStory<typeof HeaderNotLoggedInComponent> = () => <HeaderNotLoggedInComponent />;
export const HeaderNotLoggedInComponentTest = HeaderNotLoggedInComponentTemplate.bind({});

