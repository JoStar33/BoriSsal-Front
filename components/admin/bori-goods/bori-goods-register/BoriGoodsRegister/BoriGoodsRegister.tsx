import { useCategoryQuery } from "@/hooks/bori-goods/useCategoryQuery/useCategoryQuery";
import { useRegistImage } from "@/hooks/common/useRegistImage/useRegistImage";
import { IPostBoriGoods } from "@/types/boriGoods";
import { useState } from "react";
import BoriGoodsRegisterController from "../BoriGoodsRegisterController/BoriGoodsRegisterController";
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
  return (
    <>
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
        <BoriGoodsRegisterController
          setGoodsInfo={setGoodsInfo}
          setImage={setImage}
          goodsInfo={goodsInfo}
          categoryInfo={categoryInfo}
          formData={formData}
          image={image}/>
      </div>
    </>
  );
};

export default BoriGoodsRegister;
