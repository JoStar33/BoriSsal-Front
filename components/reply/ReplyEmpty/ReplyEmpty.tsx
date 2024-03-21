import Image from 'next/image';
import styles from './reply_empty.module.scss';
import cart_empty_bori from '/public/cart/cart_empty_bori.png';

const ReplyEmpty = () => {
  return (
    <div className={styles.reply_empty_container}>
      <figure
        style={{
          position: 'relative',
          width: '9vw',
          height: '16vw',
        }}
      >
        <Image fill alt="댓글이 비어있습니다." src={cart_empty_bori} />
      </figure>
      <div className={styles.textbox}>
        <h1>댓글이 비어있습니다.</h1>
        <h1>첫번째 댓글을 작성해보세요!</h1>
      </div>
    </div>
  );
};

export default ReplyEmpty;
