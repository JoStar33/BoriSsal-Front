import { useLikeGoodsMutation } from '@/hooks/bori-goods/useLikeGoodsMutation/useLikeGoodsMutation';
import { useValidateDialog } from '@/hooks/common/useValidateDialog/useValidateDialog';
import { IBoriGoods } from '@/types/boriGoods';
import { IUser } from '@/types/user';
import { AiFillHeart } from 'react-icons/ai';
import styles from './bori_goods_detail_like.module.scss';

interface IProps {
  user: IUser;
  goods: IBoriGoods;
}

const BoriGoodsDetailLike = ({ user, goods }: IProps) => {
  const likeGoodsMutation = useLikeGoodsMutation(user.user_bori_goods_like, goods._id);
  const { setDialog, setDialogText } = useValidateDialog();
  const handleLikeGoods = () => {
    if (likeGoodsMutation.isLoading) {
      return;
    }
    if (!user.email) {
      setDialogText('로그인 이후에 누를 수 있어요!');
      return setDialog(true);
    }
    user.user_bori_goods_like.find((likeGoods) => likeGoods === goods._id) ? goods.bori_goods_like-- : goods.bori_goods_like++;
    likeGoodsMutation.mutate();
  };
  return (
    <>
      <div className={styles.goods_like_container}>
        좋아요:
        <div>
          <button onClick={handleLikeGoods} aria-label="좋아요 버튼" role="like">
            <AiFillHeart
              role="like-heart"
              color={user.user_bori_goods_like.find((likeGoods) => likeGoods === goods._id) ? 'red' : 'black'}
              size={25}
            />
          </button>
          {goods.bori_goods_like}
        </div>
      </div>
    </>
  );
};

export default BoriGoodsDetailLike;
