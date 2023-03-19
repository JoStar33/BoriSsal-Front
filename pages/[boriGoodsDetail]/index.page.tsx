import { getCategory, getGoods } from '@/apis/bori-goods/boriGoods';
import { errorMessage } from '@/apis/error/customError';
import { IBoriGoods, ICategory } from '@/types/boriGoods';
import { AxiosError } from 'axios';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';

interface IProps {
  
}

const BoriGoodsDetail = () => {
  return (
    <div>
      
    </div>
  );
};

export default BoriGoodsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  let goodsData: IBoriGoods[] = [];
  await getGoods()
  .then((res) => {
    goodsData = res.data;
  });
  const paths = goodsData.map((goods) => ({ params: { boriGoodsDetail: goods.product_name } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let goodsData: IBoriGoods[] = [];
  let categoryData: ICategory[] = [];
  let categoryErrorMessage = null;
  let goodsErrorMessage = null;
  await getGoods()
  .then((res) => {
    goodsData = res.data;
  })
  .catch((error: AxiosError) => {
    goodsErrorMessage = errorMessage(error);
  });
  await getCategory()
  .then((res) => { 
    categoryData = res.data;
  }).catch((error: AxiosError) => {
    categoryErrorMessage = errorMessage(error);
  });
  const goods = goodsData.find((goods) => goods.product_name === params?.boriGoodsDetail);
  const category = categoryData.find((category) => category._id === goods?.category_id);
  return { props: { goods, category } };
};
