import React, { useState } from 'react';
import BoriGoodsItem from '@/components/bori-goods/BoriGoodsItem';
import { getGoods, getCategory } from '@/apis/bori-goods/boriGoods';
import { AxiosError } from 'axios';
import { boriGoodsType, categoryType } from '@/types/boriGoods';
import styles from './bori_goods_page.module.scss';

type propsType = {
  goodsData: boriGoodsType[];
  errorMessage: string;
  categoryData: categoryType[];
}

const BoriGoodsPage = ({goodsData, errorMessage, categoryData}: propsType) => {
  const [categoryType, setCategoryType] = useState('0');
  const handleSelectLayout = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryType(e.target.value)
  }
  return (
    <div className={styles.bori_goods_page_container}>
      <h1>보리 굿즈</h1>
      <div className={styles.user_place}>
        <p className={styles.show_count}>전체 (수량: {goodsData.length})</p>
        <p className={styles.category_label}>카테고리: </p>
        <div className={styles.styled_select}>
          <select onChange={handleSelectLayout}>
            {
              categoryData.map((category) => 
                <option 
                  key={category._id} 
                  value={category._id}
                >
                  {
                    category.category_name
                  }
                </option>)
            }
          </select>
        </div>
      </div>
      <div className={styles.bori_goods_container}>
        {
          goodsData.filter((cateGoods) => {
            if (categoryType === '0')
              return cateGoods;
            if(cateGoods.category_id === categoryType)
              return cateGoods;
          }).map((goods) =>           
            <BoriGoodsItem 
              key={goods._id}
              bori_goods_image={goods.product_image} 
              goods_like={goods.product_like} 
              goods_name={goods.product_name} 
              product_price={goods.product_price} 
              category_name={categoryData.find(category => category._id === goods.category_id)?.category_name}></BoriGoodsItem>
          )
        }
      </div>
    </div>
  );
};

export default BoriGoodsPage;

export async function getStaticProps() {
  let goodsData = null;
  let categoryData = null;
  let goodsErrorMessage = null;
  let categoryErrorMessage = null;
  await getGoods()
    .then((res) => {
      goodsData = res.data as boriGoodsType[];
    })
    .catch((error: AxiosError) => {
      goodsErrorMessage = (error.response?.data as any).message
    });
  await getCategory()
    .then((res) => { 
      categoryData = res.data as categoryType[];
      categoryData.unshift({
        _id: '0',
        category_name: '전체'
      })
    }).catch((error: AxiosError) => {
      categoryErrorMessage = (error.response?.data as any).message
    });
  return {
    props: { goodsData, goodsErrorMessage, categoryErrorMessage, categoryData },
    revalidate: 5 /** https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration */,
  };
}