import Image from 'next/image';
import styles from './bori_gallery_empty.module.scss';
import cart_empty_bori from '/public/cart/cart_empty_bori.png';

const BoriGalleryEmpty = () => {
  return (
    <div className={styles.bori_goods_empty_container}>
      <figure
        style={{
          position: 'relative',
          width: '9vw',
          height: '16vw',
        }}
      >
        <Image fill alt="갤러리가 없습니다." src={cart_empty_bori} />
      </figure>
      <div className={styles.textbox}>
        <h1>갤러리가 없습니다.</h1>
      </div>
    </div>
  );
};

export default BoriGalleryEmpty;
