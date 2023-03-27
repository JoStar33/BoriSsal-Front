import { ICartGoods } from "@/types/cart";
import Image from "next/image";
import styles from './order_history_goods_item.module.scss';

interface IProps {
  boriGoods: ICartGoods;
}

const OrderHistoryGoodsItem = ({boriGoods}: IProps) => {
  return (
    <div className={styles.order_goods_container}>
      <figure
        style={{
          position: "relative",
          width: "7vw",
          height: "7vw",
          margin: "1.3vw"
        }}>
        <Image 
          fill
          alt={boriGoods.bori_goods_name} 
          src={`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}${boriGoods.bori_goods_image}`}></Image>
      </figure>
      <div className={styles.order_info}>
        <p>{boriGoods.bori_goods_name}</p>
        <p>수량: {boriGoods.bori_goods_count}개</p>
      </div>
      <p className={styles.price}>금액: {boriGoods.bori_goods_price}</p>
    </div>
  );
};

export default OrderHistoryGoodsItem;