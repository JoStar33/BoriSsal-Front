import { useSuccessDialog } from "@/hooks/common/useSuccessDialog/useSuccessDialog";
import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";
import { IBoriGoods, ICategory, IPostBoriGoods } from "@/types/boriGoods";
import { useEffect, useState } from "react";
import GoodsItemController from "../GoodsItemController/GoodsItemController";
import GoodsItemImage from "../GoodsItemImage/GoodsItemImage";
import styles from "./goods_list_item.module.scss";

interface IProps {
  boriGoods: IBoriGoods;
  category?: ICategory[];
}

const GoodsListItem = ({ boriGoods, category }: IProps) => {
  const [goodsInfo, setGoodsInfo] = useState<IPostBoriGoods>({
    bori_goods_name: "",
    bori_goods_price: 0,
    bori_goods_stock: 0,
    bori_goods_desc: "",
  });
  const { dialog, setDialog, setDialogText, renderDialog } =
    useValidateDialog();
  const {
    successDialog,
    setSuccessDialog,
    setSuccessDialogText,
    renderSuccessDialog,
  } = useSuccessDialog();
  const [categoryInfo, setCategoryInfo] = useState<string>("");
  useEffect(() => {
    setCategoryInfo(boriGoods.category_id);
    setGoodsInfo({
      bori_goods_name: boriGoods.bori_goods_name,
      bori_goods_price: boriGoods.bori_goods_price,
      bori_goods_stock: boriGoods.bori_goods_stock,
      bori_goods_desc: boriGoods.bori_goods_desc,
    });
    if (!category) category = [];
  }, []);
  if (!category) category = [];
  const handleOnChangeGoodsInfo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setGoodsInfo({
      ...goodsInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSelectLayout = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryInfo(e.target.value);
  };
  return (
    <>
      {dialog && renderDialog()}
      {successDialog && renderSuccessDialog()}
      <div className={styles.goods_list_item_container}>
        <GoodsItemImage
          boriGoods={boriGoods}
          setDialog={setDialog}
          setDialogText={setDialogText}
          setSuccessDialog={setSuccessDialog}
          setSuccessDialogText={setSuccessDialogText}
        />
        <div className={styles.goods_info}>
          <input
            className={styles.name}
            onChange={handleOnChangeGoodsInfo}
            role="bori_goods_name"
            name="bori_goods_name"
            value={goodsInfo.bori_goods_name}
            type="text"
          />
          <div className={styles.price}>
            <input
              onChange={handleOnChangeGoodsInfo}
              name="bori_goods_price"
              role="bori_goods_price"
              value={goodsInfo.bori_goods_price}
              type="number"
            />
            원
          </div>
        </div>
        <div className={styles.middle_cover}>
          <div className={styles.stock_info}>
            <label>수량: </label>
            <input
              onChange={handleOnChangeGoodsInfo}
              name="bori_goods_stock"
              role="bori_goods_stock"
              value={goodsInfo.bori_goods_stock}
              type="number"
            />
            개
          </div>
          <div className={styles.select_container}>
            <label htmlFor="goods-category">카테고리:</label>
            <select value={categoryInfo} onChange={handleSelectLayout}>
              {category.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.category_name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.desc_container}>
          <p>설명</p>
          <textarea
            onChange={handleOnChangeGoodsInfo}
            role="bori_goods_desc"
            name="bori_goods_desc"
            value={goodsInfo.bori_goods_desc}
          />
        </div>
        <GoodsItemController
          setDialog={setDialog}
          setDialogText={setDialogText}
          setSuccessDialog={setSuccessDialog}
          setSuccessDialogText={setSuccessDialogText}
          boriGoods={boriGoods}
          goodsInfo={goodsInfo}
          categoryInfo={categoryInfo}
        />
      </div>
    </>
  );
};

export default GoodsListItem;
