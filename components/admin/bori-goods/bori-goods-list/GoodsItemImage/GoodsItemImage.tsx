import { useBoriGoodsImageMutation } from '@/hooks/bori-goods/useBoriGoodsImageMutation/useBoriGoodsImageMutation';
import { IBoriGoods } from '@/types/boriGoods';
import Image from "next/image";
import React, { Dispatch, MutableRefObject, SetStateAction, useRef } from 'react';

interface IProps {
  boriGoods: IBoriGoods
  setDialog: Dispatch<SetStateAction<boolean>>;
  dialogText: MutableRefObject<string>;
  setSuccessDialog: Dispatch<SetStateAction<boolean>>;
  successDialogText: MutableRefObject<string>;
} 

const GoodsItemImage = ({boriGoods, setDialog, dialogText, setSuccessDialog, successDialogText}: IProps) => {
  const formData = useRef<FormData>(new FormData());
  const { mutate: updateBoriImage } = useBoriGoodsImageMutation(
    boriGoods._id,
    setDialog,
    dialogText,
    setSuccessDialog,
    successDialogText
  );
  const handleOnChangeGoodsImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file: File = e.target.files[0];
    formData.current.append("bori_goods_images", file);
    updateBoriImage(formData.current);
  };
  return (
    <>
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
    </>
  );
};

export default GoodsItemImage;