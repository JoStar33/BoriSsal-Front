import { ComponentMeta, ComponentStory } from '@storybook/react';
import GalleryListItem from './GalleryListItem';

export default {
  title: '컴포넌트/어드민/보리갤러리/갤러리 리스트 요소',
  component: GalleryListItem,
} as ComponentMeta<typeof GalleryListItem>;

const Template: ComponentStory<typeof GalleryListItem> = (args) => <GalleryListItem {...args} />;

export const GalleryListItemTest = Template.bind({});
GalleryListItemTest.args = {
  boriGallery: {
    _id: '23',
    bori_gallery_title: '제하하하',
    bori_gallery_desc: '크로우즈',
    bori_gallery_like: 3,
    bori_gallery_image: '/none',
    created_at: new Date()
  }
}
