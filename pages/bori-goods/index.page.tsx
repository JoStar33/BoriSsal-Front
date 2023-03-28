import { getBoriGoods, getCategory } from '@/apis/bori-goods/boriGoods';
import { errorMessage } from '@/apis/error/customError';
import BoriGoodsItem from '@/components/bori-goods/BoriGoodsItem/BoriGoodsItem';
import ErrorPage from '@/components/error/ErrorPage/ErrorPage';
import { IBoriGoods, ICategory } from '@/types/boriGoods';
import { AxiosError } from 'axios';
import React, { useState } from 'react';
import styles from './bori_goods_page.module.scss';

interface IProps {
  goodsData: IBoriGoods[];
  errorMessage: string;
  categoryData: ICategory[];
};

const BoriGoodsPage = ({goodsData, errorMessage, categoryData}: IProps) => {
  const [categoryInfo, setCategoryInfo] = useState<string>('0');
  const [searchInfo, setSearchInfo] = useState<string>('');
  const categoryName = (goods: IBoriGoods) => {
    const findCategoryData = categoryData.find(category => category._id === goods.category_id)
    if(!findCategoryData)
      return ''
    return findCategoryData.category_name;
  }
  const handleSelectLayout = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryInfo(e.target.value)
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInfo(e.target.value);
  };
  if (errorMessage) {
    return <ErrorPage errorText={errorMessage}></ErrorPage>
  }
  return (
    <div className={styles.bori_goods_page_container}>
      <h1>보리 굿즈</h1>
      <div className={styles.user_place}>
        <p className={styles.show_count}>전체 (수량: {goodsData.length})</p>
        <div className={styles.search_part}>
          <label htmlFor="search_goods">검색:</label>
          <input id='search_goods' onChange={handleSearch}/>
        </div>
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
          goodsData
          .filter((searchGoods) =>
            searchGoods.bori_goods_name.includes(searchInfo)
          ).filter((cateGoods) => {
            if (categoryInfo === '0')
              return cateGoods;
            if(cateGoods.category_id === categoryInfo)
              return cateGoods;
            }
          ).map((goods) =>           
            <BoriGoodsItem 
              key={goods._id}
              bori_goods_image={goods.bori_goods_image} 
              goods_like={goods.bori_goods_like} 
              goods_name={goods.bori_goods_name} 
              bori_goods_price={goods.bori_goods_price} 
              category_name={categoryName(goods)}></BoriGoodsItem>
          )
        }
      </div>
    </div>
  );
};

export default BoriGoodsPage;

export async function getStaticProps() {
  let goodsData: IBoriGoods[] = [];
  let categoryData: ICategory[] = [];
  let goodsErrorMessage = null;
  let categoryErrorMessage = null;
  await getBoriGoods()
    .then((res) => {
      goodsData = res;
    }).catch((error: AxiosError) => {
      goodsErrorMessage = errorMessage(error)
    });
  await getCategory()
    .then((res) => { 
      categoryData = res;
      categoryData.unshift({
        _id: '0',
        category_name: '전체'
      })
    }).catch((error: AxiosError) => {
      categoryErrorMessage = errorMessage(error)
    });
  return {
    props: { goodsData, goodsErrorMessage, categoryErrorMessage, categoryData },
    revalidate: 5 /** https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration */,
  };
}
