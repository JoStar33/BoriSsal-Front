import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import styles from './bori_goods_item.module.scss';

interface IProps {
  bori_goods_image: string;
  goods_like: number;
  goods_name: string;
  bori_goods_price: number;
  category_name?: string
}

const BoriGoodsItem = ({goods_name, bori_goods_image, goods_like, bori_goods_price, category_name}: IProps) => {
  return (
    <Link href={goods_name}>
      <div className={styles.bori_goods_item}>
        <div>
          <div style={{ position: 'relative', width: "25vw", height: "25vw" }}>
            <Image src={`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}${bori_goods_image}`} alt={goods_name} fill></Image>
          </div>
          <div className={styles.heart_box}>
            <AiFillHeart size={25}></AiFillHeart>
            {goods_like}
          </div>
        </div>
        <div className={styles.bori_goods_info}>
          <p className={styles.bori_goods_name}>{goods_name}</p>
          <p className={styles.goods_category_name}>#{category_name}</p>
          <p className={styles.bori_goods_price}>{bori_goods_price}원</p>
        </div>
      </div>
    </Link>
  );
};

export default BoriGoodsItem;