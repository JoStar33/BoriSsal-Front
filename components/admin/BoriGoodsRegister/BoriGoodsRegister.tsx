import { useCategoryQuery } from "@/hooks/bori-goods/useCategoryQuery/useCategoryQuery";
import { useRegistBoriGoodsMutation } from "@/hooks/bori-goods/useRegistBoriGoodsMutation/useRegistBoriGoodsMutation";
import { useDialog } from "@/hooks/common/useDialog/useDialog";
import { useRegistImage } from "@/hooks/common/useRegistImage/useRegistImage";
import { IPostBoriGoods } from "@/types/boriGoods";
import { useState } from "react";
import styles from "./bori_goods_register.module.scss";

const BoriGoodsRegister = () => {
  let { data: categoryData } = useCategoryQuery();
  const {formData, setImage, image, renderRegistImage} = useRegistImage();
  const [goodsInfo, setGoodsInfo] = useState<IPostBoriGoods>({
    bori_goods_name: "",
    bori_goods_price: 0,
    bori_goods_stock: 0,
    bori_goods_desc: "",
  });
  const [categoryInfo, setCategoryInfo] = useState<string>("");
  if (!categoryData) {
    categoryData = [];
  }
  const { dialog, setDialog, setDialogText, renderDialog } = useDialog();
  const { mutate } = useRegistBoriGoodsMutation(
    categoryInfo,
    goodsInfo,
    formData.current,
    setGoodsInfo,
    setImage
  );
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
  const handleRegistBoriGoods = () => {
    if (!image) {
      setDialogText("상품이미지는 반드시 있어야해요!");
      setDialog(true);
      return;
    }
    if (goodsInfo.bori_goods_name.length < 1) {
      setDialogText("이런 굿즈 이름을 안 설정하셨는데... 다시 확인해주세요!");
      setDialog(true);
      return;
    }
    if (goodsInfo.bori_goods_price < 500) {
      setDialogText("가격은 500원보다 커야해요!");
      setDialog(true);
      return;
    }
    if (goodsInfo.bori_goods_stock < 2) {
      setDialogText("재고는 최소 3개는 있어야해요!");
      setDialog(true);
      return;
    }
    if (goodsInfo.bori_goods_desc.length < 10) {
      setDialogText("설명을 최소 10글자 이상 써주세요!");
      setDialog(true);
      return;
    }
    if (!categoryInfo) {
      setDialogText("카테고리를 반드시 설정해주셔야 해요!");
      setDialog(true);
      return;
    }
    mutate();
  };
  return (
    <>
      {dialog && (
        <figure style={{ marginLeft: "-5vw" }}>
          {
            renderDialog()
          }
        </figure>
      )}
      <div className={styles.bori_goods_register_container}>
        {
          renderRegistImage("굿즈 이미지")
        }
        <div className={styles.text_container}>
          <label htmlFor="goods-name">굿즈명:</label>
          <input
            onChange={handleOnChangeGoodsInfo}
            name="bori_goods_name"
            id="goods-name"
            type="text"
          />
        </div>
        <div className={styles.text_container}>
          <label htmlFor="goods-price">굿즈가격:</label>
          <input
            onChange={handleOnChangeGoodsInfo}
            name="bori_goods_price"
            id="goods-price"
            type="text"
          />
        </div>
        <div className={styles.text_container}>
          <label htmlFor="goods-stock">재고량:</label>
          <input
            onChange={handleOnChangeGoodsInfo}
            name="bori_goods_stock"
            id="goods-stock"
            type="number"
          />
        </div>
        <div className={styles.select_container}>
          <label htmlFor="goods-category">카테고리:</label>
          <select onChange={handleSelectLayout}>
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
          ></textarea>
        </div>
        <button
          onClick={handleRegistBoriGoods}
          className={styles.goods_register_button}
        >
          굿즈 등록
        </button>
      </div>
    </>
  );
};

export default BoriGoodsRegister;
