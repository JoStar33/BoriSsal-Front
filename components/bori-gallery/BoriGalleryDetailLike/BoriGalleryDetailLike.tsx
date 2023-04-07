import { useLikeGalleryMutation } from '@/hooks/bori-gallery/useLikeGalleryMutation/useLikeGalleryMutation';
import { useValidateDialog } from '@/hooks/common/useValidateDialog/useValidateDialog';
import { IBoriGallery } from '@/types/boriGallery';
import { IUser } from '@/types/user';
import { AiFillHeart } from 'react-icons/ai';
import styles from './bori_gallery_detail_like.module.scss';

interface IProps {
  gallery: IBoriGallery;
  user: IUser;
}


const BoriGalleryDetailLike = ({gallery, user}: IProps) => {
  const likeGalleryMutation = useLikeGalleryMutation(user.user_bori_gallery_like, gallery._id);
  const { setDialog, setDialogText } = useValidateDialog();
  const handleLikeGoods = () => {
    if (likeGalleryMutation.isLoading) {
      return;
    }
    if (!user.email) {
      setDialogText("로그인 이후에 누를 수 있어요!");
      return setDialog(true);
    }
    user.user_bori_gallery_like.find((likeGallery) => likeGallery === gallery._id)
      ? gallery.bori_gallery_like--
      : gallery.bori_gallery_like++;
    likeGalleryMutation.mutate();
  };
  return (
    <>
      <div className={styles.gallery_like_container}>
        좋아요:
          <button onClick={handleLikeGoods}
            aria-label="좋아요 버튼"
            role='like'>
            <AiFillHeart
              role="like-heart"
              color={
                user.user_bori_gallery_like.find(
                  (likeGoods) => likeGoods === gallery._id
                )
                  ? "red"
                  : "black"
              }
              size={25}
            ></AiFillHeart>
          </button>
          {gallery.bori_gallery_like}
      </div>
    </>
  );
};

export default BoriGalleryDetailLike;