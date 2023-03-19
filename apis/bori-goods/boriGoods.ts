import { customAxios } from "../axios/customAxios";

const getGoods = () => {
  return customAxios.get('/product');
};

const getCategory = () => {
  return customAxios.get('/product-category');
};

export { getGoods, getCategory };