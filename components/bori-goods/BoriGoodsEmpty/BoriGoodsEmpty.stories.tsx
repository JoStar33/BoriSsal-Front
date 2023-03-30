import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoriGoodsEmpty from './BoriGoodsEmpty';

export default {
  title: '컴포넌트/보리굿즈/빈 보리굿즈 화면',
  component: BoriGoodsEmpty,
} as ComponentMeta<typeof BoriGoodsEmpty>;

const Template: ComponentStory<typeof BoriGoodsEmpty> = () => <BoriGoodsEmpty />;

export const BoriGoodsEmptyTest = Template.bind({});
