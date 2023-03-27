import Image from 'next/image';
import styles from './order_empty.module.scss';
import cart_empty_bori from '/public/cart/cart_empty_bori.png';

const OrderEmpty = () => {
  return (
    <div className={styles.order_empty_container}>
      <figure style={{
        position: 'relative',
        width: '9vw',
        height: '16vw'}}>
        <Image
          fill
          alt='주문내역이 없습니다.'
          src={cart_empty_bori}
        ></Image>
      </figure>
      <div className={styles.textbox}>
        <h1>
          주문 내역이 없습니다.
        </h1>
      </div>
    </div>
  );
};

export default OrderEmpty;