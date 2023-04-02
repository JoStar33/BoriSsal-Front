import Loading from "@/components/loading/Loading/Loading";
import { useDeleteBoriGoodsMutation } from "@/hooks/bori-goods/useDeleteBoriGoodsMutation/useDeleteBoriGoodsMutation";
import { useUpdateBoriGoodsMutation } from "@/hooks/bori-goods/useUpdateBoriGoodsMutation/useUpdateBoriGoodsMutation";
import { IBoriGoods, IPostBoriGoods } from "@/types/boriGoods";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import styles from './goods_item_controller.module.scss';

interface IProps {
  setDialog: Dispatch<SetStateAction<boolean>>;
  dialogText: MutableRefObject<string>;
  setSuccessDialog: Dispatch<SetStateAction<boolean>>;
  successDialogText: MutableRefObject<string>;
  boriGoods: IBoriGoods;
  goodsInfo: IPostBoriGoods;
  categoryInfo: string;
}

const GoodsItemController = ({
  setDialog,
  dialogText,
  setSuccessDialog,
  successDialogText,
  boriGoods,
  goodsInfo,
  categoryInfo,
}: IProps) => {
  const handleDeleteGoods = () => {
    deleteBoriGoods();
  };
  const { mutate: updateBoriGoods, isLoading: updateLoading } = useUpdateBoriGoodsMutation(
    categoryInfo,
    goodsInfo,
    boriGoods._id,
    setDialog,
    dialogText
  );
  const { mutate: deleteBoriGoods, isLoading: deleteLoading } = useDeleteBoriGoodsMutation(
    boriGoods._id,
    setDialog,
    dialogText
  );
  const handleUpdateGoods = () => {
    if (
      !goodsInfo.bori_goods_name ||
      !goodsInfo.bori_goods_desc ||
      !goodsInfo.bori_goods_price ||
      !goodsInfo.bori_goods_stock
    ) {
      dialogText.current = "값을 비운 상태로 수정이 불가능합니다.";
      setDialog(true);
      return;
    }
    if (categoryInfo === "0") {
      dialogText.current = "전체 카테고리 상태로 등록이 불가능합니다.";
      setDialog(true);
      return;
    }
    setSuccessDialog(true);
    successDialogText.current = "수정이 완료됐습니다!";
    updateBoriGoods();
  };
  return (
    <>
      {
        (updateLoading || deleteLoading) &&  <Loading/>
      }
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
    </>
  );
};

export default GoodsItemController;