
import { useCartStore } from '@/store/cart';
import { usePageStore } from '@/store/page';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect } from 'react';
import CompleteOrder from './index.page';
export default {
  title: '페이지/주문 완료 페이지',
  component: CompleteOrder,
} as ComponentMeta<typeof CompleteOrder>;

const CompleteOrderComponent = () => {
  const { setPageState } = usePageStore();
  const { setCart } = useCartStore();
  useEffect(() => {
    setPageState('order');
    setCart([{
      bori_goods_id: '23', 
      bori_goods_name: '보리 굿즈', 
      bori_goods_image: '/none', 
      bori_goods_count: 2, 
      bori_goods_price: 3000
    }]);
  }, []);
  return (<CompleteOrder />);
};
const Template: ComponentStory<typeof CompleteOrderComponent> = () => <CompleteOrderComponent/>;

export const CompleteOrderTest = Template.bind({});
