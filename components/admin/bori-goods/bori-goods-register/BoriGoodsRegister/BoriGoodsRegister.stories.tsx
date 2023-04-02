import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoriGoodsRegister from './BoriGoodsRegister';

export default {
  title: '컴포넌트/어드민/보리굿즈/굿즈 등록화면',
  component: BoriGoodsRegister,
} as ComponentMeta<typeof BoriGoodsRegister>;

const Template: ComponentStory<typeof BoriGoodsRegister> = () => <BoriGoodsRegister />;

export const BoriGoodsRegisterTest = Template.bind({});