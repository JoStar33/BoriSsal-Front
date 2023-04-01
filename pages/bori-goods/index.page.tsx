import { getBoriGoods, getCategory } from '@/apis/bori-goods/boriGoods';
import { errorMessage } from '@/apis/error/customError';
import BoriGoodsItem from '@/components/bori-goods/BoriGoodsItem/BoriGoodsItem';
import ErrorPage from '@/components/error/ErrorPage/ErrorPage';
import { useSearch } from '@/hooks/common/useSearch/useSearch';
import { IBoriGoods, ICategory } from '@/types/boriGoods';
import { AxiosError } from 'axios';
import React, { useState } from 'react';
import styles from './bori_goods_page.module.scss';

interface IProps {
  goodsData: IBoriGoods[];
  goodsErrorMessage: string;
  categoryData: ICategory[];
  categoryErrorMessage: string;
};

const BoriGoodsPage = ({goodsData, goodsErrorMessage, categoryData, categoryErrorMessage}: IProps) => {
  const [categoryInfo, setCategoryInfo] = useState<string>('0');
  const { searchInfo, renderSearch } = useSearch();
  const categoryName = (goods: IBoriGoods) => {
    const findCategoryData = categoryData.find(category => category._id === goods.category_id)
    if(!findCategoryData)
      return ''
    return findCategoryData.category_name;
  }
  const handleSelectLayout = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryInfo(e.target.value)
  };
  if (goodsErrorMessage) {
    return <ErrorPage errorText={goodsErrorMessage}></ErrorPage>
  }
  if (categoryErrorMessage) {
    return <ErrorPage errorText={categoryErrorMessage}></ErrorPage>
  }
  return (
    <div className={styles.bori_goods_page_container}>
      <h1>보리 굿즈</h1>
      <div className={styles.user_place}>
        <p className={styles.show_count}>전체 (수량: {goodsData.length})</p>
        {
          renderSearch()
        }
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
    props: { goodsData, goodsErrorMessage, categoryData, categoryErrorMessage },
    revalidate: 5 /** https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration */,
  };
}
