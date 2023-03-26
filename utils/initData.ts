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

const initReplyMutation = {
  bori_goods_reply: [], 
  overflow: false
}

export { initDeliver, initUser, initReplyMutation };