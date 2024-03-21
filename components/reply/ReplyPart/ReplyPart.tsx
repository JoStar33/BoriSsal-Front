import { useBoriGalleryChildReplyMutation } from '@/hooks/bori-gallery/useBoriGalleryChildReplyMutation/useBoriGalleryChildReplyMutation';
import { useBoriGoodsChildReplyMutation } from '@/hooks/bori-goods/useBoriGoodsChildReplyMutation/useBoriGoodsChildReplyMutation';
import { useValidateDialog } from '@/hooks/common/useValidateDialog/useValidateDialog';
import { IReply } from '@/types/reply';
import { IUser } from '@/types/user';
import { initUser } from '@/utils/initData';
import { useRef, useState } from 'react';
import ReplyChildPart from '../ReplyChildPart/ReplyChildPart';
import styles from './reply_part.module.scss';

interface IProps {
  user: IUser;
  isGoods: boolean;
  reply: IReply;
}

const ReplyPart = ({ user, isGoods, reply }: IProps) => {
  const [showChildReply, setShowChildReply] = useState<boolean>(false);
  const replyDate = useRef<Date>(new Date(reply.created_at));
  const replyInputRef = useRef<HTMLInputElement>(null);
  if (!user) {
    user = initUser;
  }
  const goodsReplyChildMutation = useBoriGoodsChildReplyMutation(user.email, reply._id);
  const galleryReplyChildMutation = useBoriGalleryChildReplyMutation(user.email, reply._id);
  const { setDialog, setDialogText } = useValidateDialog();
  const handleOnChilk = () => {
    setShowChildReply(!showChildReply);
  };
  const replyRegist = () => {
    if (!replyInputRef.current) return;
    if (!user) return;
    if (user.email.length < 3) {
      setDialog(true);
      setDialogText('로그인후 이용해주세요!');
      return;
    }
    if (replyInputRef.current.value.length < 2) {
      setDialogText('최소 두글자는 입력해주세요!');
      setDialog(true);
      return;
    }
    if (isGoods) goodsReplyChildMutation.mutate(replyInputRef.current.value);
    if (!isGoods) galleryReplyChildMutation.mutate(replyInputRef.current.value);
  };
  return (
    <div className={styles.reply_part_container}>
      <div className={styles.reply_info_container}>
        <p>{reply.email}</p>
        <p>{replyDate.current.toLocaleString()}</p>
        <p>{reply.content}</p>
        {showChildReply ? (
          <button aria-label="닫기 버튼" className={styles.child_reply_button} onClick={handleOnChilk}>
            닫기
          </button>
        ) : reply.reply_child.length > 0 ? (
          <button aria-label="답글 보기 버튼" className={styles.child_reply_button} onClick={handleOnChilk}>
            답글 {reply.reply_child.length}개
          </button>
        ) : (
          <button aria-label="최초 답글 버튼" role="child-reply" className={styles.child_reply_button} onClick={handleOnChilk}>
            답글달기
          </button>
        )}
      </div>
      {showChildReply && (
        <div>
          {reply.reply_child.map((replyChild) => (
            <ReplyChildPart key={replyChild.created_at} replyChild={replyChild} />
          ))}
          <div className={styles.reply_input_container}>
            <label htmlFor="goods_child_reply">댓글: </label>
            <input ref={replyInputRef} id="goods_child_reply" type="text" />
            <button aria-label="댓글 등록 버튼" onClick={replyRegist}>
              댓글 등록
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReplyPart;
