import { ComponentMeta, ComponentStory } from "@storybook/react";
import OrderStatusUpdateDialog from "./OrderStatusUpdateDialog";

export default {
  title: "컴포넌트/다이얼로그/주문상태 변경 다이얼로그",
  component: OrderStatusUpdateDialog,
} as ComponentMeta<typeof OrderStatusUpdateDialog>;

const Template: ComponentStory<typeof OrderStatusUpdateDialog> = (args) => (
  <OrderStatusUpdateDialog {...args} />
);

export const OrderStatusUpdateDialogTest = Template.bind({});
