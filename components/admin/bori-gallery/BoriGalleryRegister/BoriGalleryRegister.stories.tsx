import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoriGalleryRegister from './BoriGalleryRegister';

export default {
  title: '컴포넌트/어드민/보리갤러리/갤러리 등록화면',
  component: BoriGalleryRegister,
} as ComponentMeta<typeof BoriGalleryRegister>;

const Template: ComponentStory<typeof BoriGalleryRegister> = () => <BoriGalleryRegister />;

export const BoriGalleryRegisterTest = Template.bind({});