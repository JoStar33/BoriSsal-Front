import { postBoriGoods } from "@/apis/bori-goods/boriGoods";
import { useSuccessDialog } from "@/hooks/common/useSuccessDialog/useSuccessDialog";
import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";
import { IPostBoriGoods } from "@/types/boriGoods";
import { Dispatch, SetStateAction } from "react";
import { useMutation } from "react-query";
import { errorMessage } from './../../../apis/error/customError';

export const useRegistBoriGoodsMutation = (
  category_id: string,
  bori_goods: IPostBoriGoods,
  bori_goods_image: FormData,
  setGoodsInfo: Dispatch<SetStateAction<IPostBoriGoods>>,
  setImage: Dispatch<any>
) => {
  const { setDialog, setDialogText } = useValidateDialog();
  const { setSuccessDialog, setSuccessDialogText } = useSuccessDialog();
  return useMutation(
    () => postBoriGoods(category_id, bori_goods, bori_goods_image),
    {
      onSuccess: () => {
        setGoodsInfo(() => {
          return {
            bori_goods_name: "",
            bori_goods_price: 0,
            bori_goods_stock: 0,
            bori_goods_desc: "",
          }
        });
        bori_goods_image = new FormData();
        setImage("");
        setSuccessDialog(true);
        setSuccessDialogText("굿즈 등록이 완료됐습니다!");
      },
      onError: (error) => {
        setDialog(true);
        setDialogText(errorMessage(error));
      }
    }
  );
};
