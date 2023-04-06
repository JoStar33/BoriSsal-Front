import { IBoriGoods } from '@/types/boriGoods';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillHeart } from 'react-icons/ai';
import styles from './bori_goods_item.module.scss';

interface IProps {
  goods: IBoriGoods;
  category_name: string
}

const BoriGoodsItem = ({goods, category_name}: IProps) => {
  return (
    <Link href={`/bori-goods/${goods._id}`} aria-label={`${goods.bori_goods_name} 페이지로 이동`}>
      <div className={styles.bori_goods_item}>
        <div>
          <div style={{ position: 'relative', width: "25vw", height: "25vw" }}>
            <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${goods.bori_goods_image}`} alt={goods.bori_goods_name} sizes="(min-width: 25vw) 25vw" fill></Image>
          </div>
          <div className={styles.heart_box}>
            <AiFillHeart style={{ width: "2vw", height: "2vw" }}></AiFillHeart>
            {goods.bori_goods_like}
          </div>
        </div>
        <div className={styles.bori_goods_info}>
          <p className={styles.bori_goods_name}>{goods.bori_goods_name}</p>
          <p className={styles.goods_category_name}>
            {
              category_name 
              ? `#${category_name}`
              : '#카테고리 없음'
            }</p>
          <p className={styles.bori_goods_price}>{goods.bori_goods_price}원</p>
        </div>
      </div>
    </Link>
  );
};

export default BoriGoodsItem;