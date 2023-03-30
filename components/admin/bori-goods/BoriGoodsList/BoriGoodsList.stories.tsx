import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoriGoodsList from './BoriGoodsList';

export default {
  title: '컴포넌트/어드민/보리굿즈/굿즈 리스트',
  component: BoriGoodsList,
} as ComponentMeta<typeof BoriGoodsList>;

const Template: ComponentStory<typeof BoriGoodsList> = () => <BoriGoodsList />;

export const BoriGoodsListTest = Template.bind({});