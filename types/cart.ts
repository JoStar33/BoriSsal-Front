export interface ICartGoods {
  bori_goods_id: string;
  bori_goods_name: string;
  bori_goods_image: string;
  bori_goods_stock: number;
  bori_goods_price: number;
}

export interface IPostCartGoods {
  user_id: string;
  bori_goods_id: string;
  bori_goods_name: string;
  bori_goods_image: string;
  bori_goods_stock: number;
  bori_goods_price: number;
}
