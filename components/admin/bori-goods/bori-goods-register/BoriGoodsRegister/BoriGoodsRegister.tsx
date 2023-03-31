import { useCategoryQuery } from "@/hooks/bori-goods/useCategoryQuery/useCategoryQuery";
import { useRegistBoriGoodsMutation } from "@/hooks/bori-goods/useRegistBoriGoodsMutation/useRegistBoriGoodsMutation";
import { useRegistImage } from "@/hooks/common/useRegistImage/useRegistImage";
import { useSuccessDialog } from "@/hooks/common/useSuccessDialog/useSuccessDialog";
import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";
import { IPostBoriGoods } from "@/types/boriGoods";
import { useState } from "react";
import BoriGoodsRegisterInputViewer from "../BoriGoodsRegisterInputViewer/BoriGoodsRegisterInputViewer";
import styles from "./bori_goods_register.module.scss";

const BoriGoodsRegister = () => {
  let { data: categoryData } = useCategoryQuery();
  const { formData, setImage, image, renderRegistImage } = useRegistImage();
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
  const { dialog, setDialog, setDialogText, renderDialog } =
    useValidateDialog();
  const {
    successDialog,
    setSuccessDialog,
    setSuccessDialogText,
    renderSuccessDialog,
  } = useSuccessDialog();
  const { mutate } = useRegistBoriGoodsMutation(
    categoryInfo,
    goodsInfo,
    formData.current,
    setGoodsInfo,
    setImage,
    setDialog,
    setDialogText,
    setSuccessDialog,
    setSuccessDialogText
  );
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
        <figure style={{ marginLeft: "-5vw" }}>{renderDialog()}</figure>
      )}
      {successDialog && (
        <figure style={{ marginLeft: "-5vw" }}>{renderSuccessDialog()}</figure>
      )}
      <div className={styles.bori_goods_register_container}>
        {
          renderRegistImage("굿즈 이미지", "bori_goods_images")
        }
        <BoriGoodsRegisterInputViewer
          categoryData={categoryData}
          setCategoryInfo={setCategoryInfo}
          setGoodsInfo={setGoodsInfo}
          goodsInfo={goodsInfo}
        />
        <button
          role="regist-button"
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
