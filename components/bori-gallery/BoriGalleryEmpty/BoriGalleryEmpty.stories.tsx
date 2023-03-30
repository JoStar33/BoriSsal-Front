import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoriGalleryEmpty from './BoriGalleryEmpty';

export default {
  title: '컴포넌트/보리갤러리/빈 보리갤러리 화면',
  component: BoriGalleryEmpty,
} as ComponentMeta<typeof BoriGalleryEmpty>;

const Template: ComponentStory<typeof BoriGalleryEmpty> = () => <BoriGalleryEmpty />;

export const BoriGalleryEmptyTest = Template.bind({});
