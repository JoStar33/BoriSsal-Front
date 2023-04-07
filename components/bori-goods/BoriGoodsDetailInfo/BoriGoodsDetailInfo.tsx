import ShareButton from "@/components/common/ShareButton/ShareButton";
import { IBoriGoods, ICategory } from "@/types/boriGoods";
import { IUser } from "@/types/user";
import dynamic from "next/dynamic";
import Image from "next/image";
import BoriGoodsDetailController from "../BoriGoodsDetailController/BoriGoodsDetailController";
import styles from "./bori_goods_detail_info.module.scss";

interface IProps {
  goods: IBoriGoods;
  category: ICategory;
  user: IUser;
}

const BoriGoodsDetailLike = dynamic(
  () => import("../BoriGoodsDetailLike/BoriGoodsDetailLike"),
  { ssr: false }
);

const BoriGoodsDetailInfo = ({ goods, category, user }: IProps) => {
  return (
    <>
      <div className={styles.bori_goods_detail_info_container}>
        <div className={styles.goods_image_container}>
          <figure
            style={{ position: "relative", width: "48vw", height: "48vw" }}
          >
            <Image
              fill
              style={{ border: "2px solid black", objectFit: "cover" }}
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${goods.bori_goods_image}`}
              alt={goods.bori_goods_name}
            ></Image>
          </figure>
          <BoriGoodsDetailController
            goods={goods}
            user={user}
          />
        </div>
        <div className={styles.goods_info}>
          <p>제품 정보: {goods.bori_goods_name}</p>
          <p className={styles.goods_category}>
            카테고리: #{category.category_name}
          </p>
          <BoriGoodsDetailLike
            user={user}
            goods={goods}
          />
          <p>상품가격: {goods.bori_goods_price}</p>
          <ShareButton />
          <p className={styles.goods_desc_label}>굿즈 설명</p>
          <div className={styles.goods_desc}>{goods.bori_goods_desc}</div>
        </div>
      </div>
    </>
  );
};

export default BoriGoodsDetailInfo;
