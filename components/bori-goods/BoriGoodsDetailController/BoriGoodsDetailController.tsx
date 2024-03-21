import { useValidateDialog } from '@/hooks/common/useValidateDialog/useValidateDialog';
import { useCartMutation } from '@/hooks/user/useCartMutation/useCartMutation';
import { useCartStore } from '@/store/cart';
import { usePageStore } from '@/store/page';
import { IBoriGoods } from '@/types/boriGoods';
import { IUser } from '@/types/user';
import { useRouter } from 'next/router';
import { BsFillCartFill } from 'react-icons/bs';
import styles from './bori_goods_detail_controller.module.scss';

interface IProps {
  goods: IBoriGoods;
  user: IUser;
}

const BoriGoodsDetailController = ({ user, goods }: IProps) => {
  const { setPageState } = usePageStore();
  const router = useRouter();
  const { setDialog, setDialogText } = useValidateDialog();
  const { setCart } = useCartStore();
  const { mutate } = useCartMutation({
    bori_goods_id: goods._id,
    bori_goods_name: goods.bori_goods_name,
    bori_goods_image: goods.bori_goods_image,
    bori_goods_count: 1,
    bori_goods_price: goods.bori_goods_price,
  });
  const handleCart = () => {
    if (user.email.length < 2) {
      setDialog(true);
      setDialogText('로그인 후 이용 가능합니다.');
      return;
    }
    mutate();
  };
  const handleOrder = () => {
    if (user.email.length < 2) {
      setDialog(true);
      setDialogText('로그인 후 이용 가능합니다.');
      return;
    }
    setCart([
      {
        bori_goods_id: goods._id,
        bori_goods_name: goods.bori_goods_name,
        bori_goods_image: goods.bori_goods_image,
        bori_goods_count: 1,
        bori_goods_price: goods.bori_goods_price,
      },
    ]);
    setPageState('order');
    router.push('/order');
  };
  return (
    <div className={styles.button_container}>
      <button onClick={handleCart} className={styles.cart_button} aria-label="장바구니 담기">
        <BsFillCartFill color="black" style={{ width: '3vw', height: '3vw' }} />
        장바구니 담기
      </button>
      <button onClick={handleOrder} className={styles.order_button} aria-label="주문하기">
        주문하기
      </button>
    </div>
  );
};

export default BoriGoodsDetailController;
