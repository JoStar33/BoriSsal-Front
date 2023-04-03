import { useLikeGoodsMutation } from '@/hooks/bori-goods/useLikeGoodsMutation/useLikeGoodsMutation';
import { IBoriGoods } from '@/types/boriGoods';
import { IUser } from '@/types/user';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import styles from './bori_goods_detail_like.module.scss';

interface IProps {
  validateText: MutableRefObject<string>;
  setValidateDialog: Dispatch<SetStateAction<boolean>>;
  user: IUser;
  goods: IBoriGoods;
}

const BoriGoodsDetailLike = ({
  validateText,
  setValidateDialog,
  user,
  goods
}: IProps) => {
  const likeGoodsMutation = useLikeGoodsMutation(user.user_bori_goods_like, goods._id);
  const handleLikeGoods = () => {
    if (!user.email) {
      validateText.current = "로그인 이후에 누를 수 있어요!";
      return setValidateDialog(true);
    }
    user.user_bori_goods_like.find((likeGoods) => likeGoods === goods._id)
      ? goods.bori_goods_like--
      : goods.bori_goods_like++;
    likeGoodsMutation.mutate();
  };
  return (
    <>
      <div className={styles.goods_like_container}>
        좋아요:
        <div>
          <button onClick={handleLikeGoods}
            role='like'>
            <AiFillHeart
              role='like-heart'
              color={
                user.user_bori_goods_like.find(
                  (likeGoods) => likeGoods === goods._id
                )
                  ? "red"
                  : "black"
              }
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