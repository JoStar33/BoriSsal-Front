import { postBoriGoods } from "@/apis/bori-goods/boriGoods";
import { IPostBoriGoods } from "@/types/boriGoods";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { useMutation } from "react-query";
import { errorMessage } from './../../../apis/error/customError';

export const useRegistBoriGoodsMutation = (
  category_id: string,
  bori_goods: IPostBoriGoods,
  bori_goods_image: FormData,
  setGoodsInfo: Dispatch<SetStateAction<IPostBoriGoods>>,
  setImage: Dispatch<any>,
  setDialog: Dispatch<SetStateAction<boolean>>,
  dialogText: MutableRefObject<string>,
  setSuccessDialog: Dispatch<SetStateAction<boolean>>,
  successDialogText: MutableRefObject<string>
) => {
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
        successDialogText.current = ("굿즈 등록이 완료됐습니다!");
      },
      onError: (error) => {
        setDialog(true);
        dialogText.current = errorMessage(error);
      }
    }
  );
};
