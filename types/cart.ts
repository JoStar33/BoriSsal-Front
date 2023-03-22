export interface ICartGoods {
  bori_goods_id: string;
  bori_goods_name: string;
  bori_goods_image: string;
  bori_goods_count: number;
  bori_goods_price: number;
}

export interface IPostCartGoods extends ICartGoods {
  user_id: string;
}

export interface IGetCartGoods extends IPostCartGoods {
  _id: string;
}
