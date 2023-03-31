import { useRegistBoriGoodsMutation } from "@/hooks/bori-goods/useRegistBoriGoodsMutation/useRegistBoriGoodsMutation";
import { IPostBoriGoods } from "@/types/boriGoods";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import styles from './bori_goods_register_controller.module.scss';

interface IProps {
  image: any;
  setDialog: Dispatch<SetStateAction<boolean>>;
  dialogText: MutableRefObject<string>;
  setSuccessDialog: Dispatch<SetStateAction<boolean>>;
  successDialogText: MutableRefObject<string>;
  setGoodsInfo: Dispatch<SetStateAction<IPostBoriGoods>>;
  goodsInfo: IPostBoriGoods;
  setImage: Dispatch<any>;
  formData: MutableRefObject<FormData>;
  categoryInfo: string;
}

const BoriGoodsRegisterController = ({
  setGoodsInfo,
  setImage,
  setDialog,
  dialogText,
  setSuccessDialog,
  successDialogText,
  goodsInfo,
  categoryInfo,
  image,
  formData,
}: IProps) => {
  const { mutate } = useRegistBoriGoodsMutation(
    categoryInfo,
    goodsInfo,
    formData.current,
    setGoodsInfo,
    setImage,
    setDialog,
    dialogText,
    setSuccessDialog,
    successDialogText
  );
  const handleRegistBoriGoods = () => {
    if (!image) {
      dialogText.current = "상품이미지는 반드시 있어야해요!";
      setDialog(true);
      return;
    }
    if (goodsInfo.bori_goods_name.length < 1) {
      dialogText.current = "이런 굿즈 이름을 안 설정하셨는데... 다시 확인해주세요!";
      setDialog(true);
      return;
    }
    if (goodsInfo.bori_goods_price < 500) {
      dialogText.current = "가격은 500원보다 커야해요!";
      setDialog(true);
      return;
    }
    if (goodsInfo.bori_goods_stock < 2) {
      dialogText.current = "재고는 최소 3개는 있어야해요!";
      setDialog(true);
      return;
    }
    if (goodsInfo.bori_goods_desc.length < 10) {
      dialogText.current = "설명을 최소 10글자 이상 써주세요!";
      setDialog(true);
      return;
    }
    if (!categoryInfo) {
      dialogText.current = "카테고리를 반드시 설정해주셔야 해요!";
      setDialog(true);
      return;
    }
    mutate();
  };
  return (
  <>        
    <button
      role="regist-button"
      onClick={handleRegistBoriGoods}
      className={styles.goods_register_button}
      >
        굿즈 등록
    </button>
  </>);
};

export default BoriGoodsRegisterController;
