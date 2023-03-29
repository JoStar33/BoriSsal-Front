import { useBoriGoodsQuery } from "@/hooks/bori-goods/useBoriGoodsQuery/useBoriGoodsQuery";
import { useCategoryQuery } from "@/hooks/bori-goods/useCategoryQuery/useCategoryQuery";
import { useSearch } from "@/hooks/common/useSearch/useSearch";
import { useState } from "react";
import GoodsListItem from "../GoodsListItem/GoodsListItem";
import styles from "./bori_goods_list.module.scss";


const BoriGoodsList = () => {
  let { data: boriGoods } = useBoriGoodsQuery();
  let { data: categoryData } = useCategoryQuery();
  const { searchInfo, renderSearch } = useSearch();
  const [categoryInfo, setCategoryInfo] = useState<string>('0');
  if (!boriGoods) {
    boriGoods = [];
  };
  if(!categoryData) {
    categoryData = [];
  };
  const handleSelectLayout = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryInfo(e.target.value)
  };
  return (
    <>
      <div className={styles.list_controller}>
        {
          renderSearch()
        }
        <div className={styles.select_container}>
          <label htmlFor="goods-category">카테고리:</label>
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
      <div className={styles.list_container}>
        {
          boriGoods          
          .filter((searchGoods) =>
            searchGoods.bori_goods_name.includes(searchInfo)
          ).filter((cateGoods) => {
            if (categoryInfo === '0')
              return cateGoods;
            if(cateGoods.category_id === categoryInfo)
              return cateGoods;
            }
          ).map(goodsElement => <GoodsListItem key={goodsElement._id} category={categoryData} boriGoods={goodsElement}/>)
        }
      </div>
    </>
  );
};

export default BoriGoodsList;