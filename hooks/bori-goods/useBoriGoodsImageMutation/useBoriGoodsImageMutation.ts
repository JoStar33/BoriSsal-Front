import { errorMessage } from './../../../apis/error/customError';

import { patchBoriGoodsImage } from "@/apis/bori-goods/boriGoods";
import { Dispatch, SetStateAction } from "react";
import { useMutation, useQueryClient } from "react-query";

export const useBoriGoodsImageMutation = (
    goods_id: string,
    setDialog: Dispatch<SetStateAction<boolean>>,
    setDialogText: Dispatch<SetStateAction<string>>,
    setSuccessDialog: Dispatch<SetStateAction<boolean>>,
    setSuccessDialogText: Dispatch<SetStateAction<string>>) => {
  const queryClient = useQueryClient();
  return useMutation((bori_goods_image: FormData) => patchBoriGoodsImage(
    goods_id,
    bori_goods_image
  ), {
    onSuccess: () => {
      setSuccessDialog(true);
      setSuccessDialogText("이미지 수정 성공!")
      queryClient.invalidateQueries("bori-goods");
    },
    onError: (error) => {
      setDialog(true);
      setDialogText(errorMessage(error));
    }
  });
};
