import { useCartStore } from '@/store/cart';
import { usePageStore } from '@/store/page';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect } from 'react';
import OrderPage from './index.page';

export default {
  title: '페이지/주문 페이지',
  component: OrderPage,
} as ComponentMeta<typeof OrderPage>;

const OrderPageComponent = () => {
  const { setPageState } = usePageStore();
  const { setCart } = useCartStore();
  useEffect(() => {
    setCart([{
      bori_goods_id: '23', 
      bori_goods_name: '보리 굿즈', 
      bori_goods_image: '/none', 
      bori_goods_count: 2, 
      bori_goods_price: 3000
    }]);
    setPageState('order');
  }, []);
  return (<OrderPage />);
}

const Template: ComponentStory<typeof OrderPageComponent> = () => <OrderPageComponent/>;

export const OrderPageTest = Template.bind({});
