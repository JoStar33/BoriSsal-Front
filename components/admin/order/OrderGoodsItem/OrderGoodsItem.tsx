import { ICartGoods } from '@/types/cart';
import Image from 'next/image';
import styles from './order_goods_item.module.scss';

interface IProps {
  boriGoods: ICartGoods;
}

const OrderGoodsItem = ({ boriGoods }: IProps) => {
  return (
    <div className={styles.order_goods_item_container}>
      <figure style={{ width: '8vw', height: '8vw', margin: '2vw', position: 'relative' }}>
        <Image fill alt={boriGoods.bori_goods_name} src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${boriGoods.bori_goods_image}`} />
      </figure>
      <div className={styles.goods_info}>
        <p>{`상품명: ${boriGoods.bori_goods_name}`}</p>
        <p>{`구매수량: ${boriGoods.bori_goods_count}개`}</p>
      </div>
      <div className={styles.goods_price}>
        <p>{`가격: ${boriGoods.bori_goods_price}원`}</p>
      </div>
    </div>
  );
};

export default OrderGoodsItem;
