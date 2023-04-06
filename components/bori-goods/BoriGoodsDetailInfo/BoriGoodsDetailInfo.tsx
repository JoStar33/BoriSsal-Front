import ShareButton from '@/components/common/ShareButton/ShareButton';
import SuccessDialog from '@/components/dialogs/SuccessDialog/SuccessDialog';
import ValidateDialog from '@/components/dialogs/ValidateDialog/ValidateDialog';
import { IBoriGoods, ICategory } from "@/types/boriGoods";
import { IUser } from '@/types/user';
import dynamic from 'next/dynamic';
import Image from "next/image";
import { useRef, useState } from 'react';
import BoriGoodsDetailController from '../BoriGoodsDetailController/BoriGoodsDetailController';
import styles from './bori_goods_detail_info.module.scss';

interface IProps {
  goods: IBoriGoods;
  category: ICategory;
  user: IUser;
}

const BoriGoodsDetailLike = dynamic(() => import('../BoriGoodsDetailLike/BoriGoodsDetailLike'), { ssr: false })

const BoriGoodsDetailInfo = ({
  goods,
  category,
  user
}:IProps) => {
  const validateText = useRef<string>("");
  const [validateDialog, setValidateDialog] = useState<boolean>(false);
  const [successDialog, setSuccessDialog] = useState<boolean>(false);
  return (
    <>
      {
        validateDialog && (
          <ValidateDialog
            text={validateText.current}
            setDialog={setValidateDialog}
          ></ValidateDialog>
        )
      }
      {
        successDialog && (
          <SuccessDialog
            text='장바구니에 굿즈를 담으셨어요!'
            setDialog={setSuccessDialog}
          ></SuccessDialog>
        )
      }
      <div className={styles.bori_goods_detail_info_container}>
        <div className={styles.goods_image_container}>
          <figure
            style={{ position: "relative", width: "48vw", height: "48vw" }}
          >
            <Image
              style={{border: '2px solid black'}}
              fill
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${goods.bori_goods_image}`}
              alt={goods.bori_goods_name}
            ></Image>
          </figure>
          <BoriGoodsDetailController 
            validateText={validateText}
            setValidateDialog={setValidateDialog}
            setSuccessDialog={setSuccessDialog}
            goods={goods} 
            user={user}/>
        </div>
        <div className={styles.goods_info}>
          <p>제품 정보: {goods.bori_goods_name}</p>
          <p className={styles.goods_category}>
            카테고리: #{category.category_name}
          </p>
          <BoriGoodsDetailLike 
            validateText={validateText} 
            setValidateDialog={setValidateDialog} 
            user={user}
            goods={goods}/>
          <p>상품가격: {goods.bori_goods_price}</p>
          <ShareButton/>
          <p className={styles.goods_desc_label}>굿즈 설명</p>
          <div className={styles.goods_desc}>
            {
              goods.bori_goods_desc
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default BoriGoodsDetailInfo;