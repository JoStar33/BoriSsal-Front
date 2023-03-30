import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoriGalleryItemSkeleton from './BoriGalleryItemSkeleton';

export default {
  title: '컴포넌트/로딩/보리 갤러리 스켈레톤',
  component: BoriGalleryItemSkeleton,
} as ComponentMeta<typeof BoriGalleryItemSkeleton>;

const Template: ComponentStory<typeof BoriGalleryItemSkeleton> = () => <BoriGalleryItemSkeleton/>;

export const BoriGalleryItemSkeletonTest = Template.bind({});
