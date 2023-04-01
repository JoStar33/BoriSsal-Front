import { IPostBoriGoods } from "@/types/boriGoods";

const initDeliver = {
  _id: '', 
  user_id: '', 
  phone_number: '-', 
  address: '-', 
  address_detail: '-'
};

const initUser = {
  email: "",
  nick: "",
  sns_id: "",
  profile_image: "",
  created_at: new Date(),
  user_bori_goods_like: [],
  user_bori_gallery_like: [],
}

const initPostBoriGoods: IPostBoriGoods = {
  bori_goods_name: "",
  bori_goods_price: 0,
  bori_goods_stock: 0,
  bori_goods_desc: "",
};


const initReplyMutation = {
  bori_goods_reply: [], 
  bori_gallery_reply: [],
  overflow: false
}

export { initDeliver, initUser, initReplyMutation, initPostBoriGoods };

