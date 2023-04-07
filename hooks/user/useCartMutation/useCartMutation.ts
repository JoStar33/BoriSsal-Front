import { errorMessage } from "@/apis/error/customError";
import { postCart } from "@/apis/user/cart";
import { useSuccessDialog } from "@/hooks/common/useSuccessDialog/useSuccessDialog";
import { useValidateDialog } from "@/hooks/common/useValidateDialog/useValidateDialog";
import { ICartGoods } from "@/types/cart";
import { useMutation } from "react-query";

export const useCartMutation = (
  cartGoods: ICartGoods
) => {
  const { setDialog, setDialogText } = useValidateDialog();
  const { setSuccessDialog, setSuccessDialogText } = useSuccessDialog();
  return useMutation(
    () => postCart(cartGoods), {
      onSuccess: () => {
        setSuccessDialogText("장바구니에 성공적으로 담으셨어요!");
        setSuccessDialog(true);
      },
      onError: (error) => {
        setDialogText(errorMessage(error));
        setDialog(true);
      }
    }
  );
};
