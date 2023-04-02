import { ICategory, IPostBoriGoods } from '@/types/boriGoods';
import React, { Dispatch, SetStateAction } from 'react';
import styles from './bori_goods_register_input_viewer.module.scss';

interface IProps {
  categoryData: ICategory[]
  setCategoryInfo: Dispatch<SetStateAction<string>>
  setGoodsInfo: Dispatch<SetStateAction<IPostBoriGoods>>
  goodsInfo: IPostBoriGoods
}

const BoriGoodsRegisterInputViewer = ({goodsInfo, categoryData, setCategoryInfo, setGoodsInfo}: IProps) => {
  const handleSelectLayout = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryInfo(e.target.value);
  };
  const handleOnChangeGoodsInfo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setGoodsInfo({
      ...goodsInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className={styles.text_container}>
        <label htmlFor="goods-name">굿즈명:</label>
        <input
          onChange={handleOnChangeGoodsInfo}
          name="bori_goods_name"
          role="bori_goods_name"
          id="goods-name"
          type="text"
        />
      </div>
      <div className={styles.text_container}>
        <label htmlFor="goods-price">굿즈가격:</label>
        <input
          onChange={handleOnChangeGoodsInfo}
          name="bori_goods_price"
          role="bori_goods_price"
          id="goods-price"
          type="number"
        />
      </div>
      <div className={styles.text_container}>
        <label htmlFor="goods-stock">재고량:</label>
        <input
          onChange={handleOnChangeGoodsInfo}
          name="bori_goods_stock"
          role="bori_goods_stock"
          id="goods-stock"
          type="number"
        />
      </div>
      <div className={styles.select_container}>
        <label htmlFor="goods-category">카테고리:</label>
        <select role="goods-category" onChange={handleSelectLayout}>
          {categoryData.map((category) => (
            <option key={category._id} value={category._id}>
              {category.category_name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.content_container}>
        <p>굿즈 설명</p>
        <textarea
          onChange={handleOnChangeGoodsInfo}
          name="bori_goods_desc"
          role="bori_goods_desc"
        ></textarea>
      </div>
    </>
  );
};

export default BoriGoodsRegisterInputViewer;