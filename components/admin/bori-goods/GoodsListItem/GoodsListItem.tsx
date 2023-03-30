import { useBoriGoodsImageMutation } from "@/hooks/bori-goods/useBoriGoodsImageMutation/useBoriGoodsImageMutation";
import { useDeleteBoriGoodsMutation } from "@/hooks/bori-goods/useDeleteBoriGoodsMutation/useDeleteBoriGoodsMutation";
import { useUpdateBoriGoodsMutation } from "@/hooks/bori-goods/useUpdateBoriGoodsMutation/useUpdateBoriGoodsMutation";
import { useSuccessDialog } from "@/hooks/common/useSuccessDialog/useSuccessDialog";
import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";
import { IBoriGoods, ICategory, IPostBoriGoods } from "@/types/boriGoods";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./goods_list_item.module.scss";

interface IProps {
  boriGoods: IBoriGoods;
  category?: ICategory[];
}

const GoodsListItem = ({ boriGoods, category }: IProps) => {
  const formData = useRef<FormData>(new FormData());
  const [goodsInfo, setGoodsInfo] = useState<IPostBoriGoods>({
    bori_goods_name: "",
    bori_goods_price: 0,
    bori_goods_stock: 0,
    bori_goods_desc: "",
  });
  const { dialog, setDialog, dialogText, setDialogText, renderDialog } =
    useValidateDialog();
  const {
    successDialog,
    setSuccessDialog,
    setSuccessDialogText,
    renderSuccessDialog,
  } = useSuccessDialog();
  const [categoryInfo, setCategoryInfo] = useState<string>("");
  const { mutate: updateBoriImage } = useBoriGoodsImageMutation(
    boriGoods._id,
    setDialog,
    setDialogText,
    setSuccessDialog,
    setSuccessDialogText
  );
  const { mutate: updateBoriGoods } = useUpdateBoriGoodsMutation(
    categoryInfo,
    goodsInfo,
    boriGoods._id,
    setDialog,
    setDialogText
  );
  const { mutate: deleteBoriGoods } = useDeleteBoriGoodsMutation(
    boriGoods._id,
    setDialog,
    setDialogText
  );
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
  const handleUpdateGoods = () => {
    if (
      !goodsInfo.bori_goods_name ||
      !goodsInfo.bori_goods_desc ||
      !goodsInfo.bori_goods_price ||
      !goodsInfo.bori_goods_stock
    ) {
      setDialogText("값을 비운 상태로 수정이 불가능합니다.");
      setDialog(true);
      return;
    }
    if (categoryInfo === "0") {
      setDialogText("전체 카테고리 상태로 등록이 불가능합니다.");
      setDialog(true);
      return;
    }
    setSuccessDialog(true);
    setSuccessDialogText("수정이 완료됐습니다!");
    updateBoriGoods();
  };
  const handleDeleteGoods = () => {
    deleteBoriGoods();
  };
  const handleOnChangeGoodsInfo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setGoodsInfo({
      ...goodsInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnChangeGoodsImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file: File = e.target.files[0];
    formData.current.append("bori_goods_images", file);
    updateBoriImage(formData.current);
  };
  const handleSelectLayout = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryInfo(e.target.value);
  };
  return (
    <>
      {dialog && renderDialog()}
      {successDialog && renderSuccessDialog()}
      <div className={styles.goods_list_item_container}>
        <label htmlFor="">
          <figure
            style={{
              width: "10vw",
              height: "10vw",
              position: "relative",
              margin: "2vw",
            }}
          >
            <Image
              fill
              src={`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}${boriGoods.bori_goods_image}`}
              alt={boriGoods.bori_goods_name}
            />
          </figure>
        </label>
        <input
          id="input-file"
          type="file"
          onChange={handleOnChangeGoodsImage}
          style={{ display: "none" }}
          accept="image/png, image/jpeg"
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
        <div className={styles.button_container}>
          <button
            role="update-goods"
            onClick={handleUpdateGoods}
            className={styles.modify_button}
          >
            수정
          </button>
          <button onClick={handleDeleteGoods} className={styles.delete_button}>
            삭제
          </button>
        </div>
      </div>
    </>
  );
};

export default GoodsListItem;