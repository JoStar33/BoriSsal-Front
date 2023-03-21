export interface IBoriGoods {
  _id: string;
  category_id: string;
  bori_goods_name: string;
  bori_goods_price: number;
  bori_goods_stock: number;
  bori_goods_desc: string;
  bori_goods_like: number;
  bori_goods_image: string;
  created_at: Date;
};

export interface ICategory {
  _id: string;
  category_name: string;
}