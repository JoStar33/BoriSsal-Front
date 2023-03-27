
import { ComponentMeta, ComponentStory } from "@storybook/react";
import UserBar from "./UserBar";

export default {
  title: "컴포넌트/사용자/유저바 테스트",
  component: UserBar,
} as ComponentMeta<typeof UserBar>;

const Template: ComponentStory<typeof UserBar> = () => (
  <UserBar user={{
    email: "",
    nick: "",
    sns_id: "",
    profile_image: "",
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: [],
  }} />
);

export const UserBarTest = Template.bind({});
