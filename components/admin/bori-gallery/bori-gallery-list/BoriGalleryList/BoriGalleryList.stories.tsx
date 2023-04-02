import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoriGalleryList from './BoriGalleryList';

export default {
  title: '컴포넌트/어드민/보리갤러리/갤러리 리스트',
  component: BoriGalleryList,
} as ComponentMeta<typeof BoriGalleryList>;

const Template: ComponentStory<typeof BoriGalleryList> = () => <BoriGalleryList />;

export const BoriGalleryListTest = Template.bind({});