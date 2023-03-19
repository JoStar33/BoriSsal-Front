export interface boriGoodsType {
  _id: string;
  category_id: string;
  product_name: string;
  product_price: number;
  product_stock: number;
  product_desc: string;
  product_like: number;
  product_image: string;
  created_at: Date;
};

export interface categoryType {
  _id: string;
  category_name: string;
}