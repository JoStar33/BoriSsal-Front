
import { useCartStore } from '@/store/cart';
import { usePageStore } from '@/store/page';
import { useUserStore } from '@/store/user';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect } from 'react';
import CompleteOrder from './index.page';
export default {
  title: '페이지/주문 완료 페이지',
  component: CompleteOrder,
} as ComponentMeta<typeof CompleteOrder>;

const CompleteOrderComponent = () => {
  const { setUser } = useUserStore();
  const { setPageState } = usePageStore();
  const { setCart } = useCartStore();
  useEffect(() => {
    setUser({
      id: "2421424325325",
      email: "",
      nick: "하오우",
      sns_id: "",
      profile_image: "",
      user_role: 0,
      created_at: new Date(),
      user_bori_goods_like: [],
      user_bori_gallery_like: []
    });
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
