export interface ICartGoods {
  product_id: string;
  product_name: string;
  product_image: string;
  product_stock: number;
  product_price: number;
}

export interface IPostCartGoods {
  user_id: string;
  product_id: string;
  product_name: string;
  product_image: string;
  product_stock: number;
  product_price: number;
}
