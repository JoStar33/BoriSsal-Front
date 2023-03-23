import { store } from '@/store';
import { setCartState } from '@/store/cart';
import { setPageState, setUserState } from '@/store/user';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OrderPage from './index.page';

export default {
  title: '페이지/주문 페이지',
  component: OrderPage,
} as ComponentMeta<typeof OrderPage>;
store.dispatch(setPageState('order'));
store.dispatch(setCartState([{
  bori_goods_id: '23', 
  bori_goods_name: '보리 굿즈', 
  bori_goods_image: '/none', 
  bori_goods_count: 2, 
  bori_goods_price: 3000
}]));
store.dispatch(setUserState({
  id: "23",
  email: "rhpp@naver.com",
  nick: "제우스",
  sns_id: "47329",
  profile_image: "/none",
  user_role: 0,
  created_at: new Date(),
  user_bori_goods_like: [],
  user_bori_gallery_like: []
}));
const Template: ComponentStory<typeof OrderPage> = () => <OrderPage/>;

export const OrderPageTest = Template.bind({});
