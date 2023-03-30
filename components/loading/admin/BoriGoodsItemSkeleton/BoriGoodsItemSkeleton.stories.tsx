import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoriGoodsItemSkeleton from './BoriGoodsItemSkeleton';

export default {
  title: '컴포넌트/로딩/보리굿즈 아이템 스켈레톤',
  component: BoriGoodsItemSkeleton,
} as ComponentMeta<typeof BoriGoodsItemSkeleton>;

const Template: ComponentStory<typeof BoriGoodsItemSkeleton> = () => <BoriGoodsItemSkeleton/>;

export const BoriGoodsItemSkeletonTest = Template.bind({});
