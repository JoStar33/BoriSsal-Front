import ValidateDialog from '@/components/dialogs/ValidateDialog/ValidateDialog';
import ReplySkeleton from '@/components/loading/ReplySkeleton/ReplySkeleton';
import { useBoriGoodsReplyMutation } from '@/hooks/bori-goods/useBoriGoodsReplyMutation/useBoriGoodsReplyMutation';
import { IReplyMutation } from '@/types/reply';
import { IUser } from '@/types/user';
import React, { useRef, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from 'react-query';
import ReplyPart from '../ReplyPart/ReplyPart';
import styles from './reply_viewer.module.scss';

interface IProps {
  user: IUser;
  goods_id: string;
  mutationData: IReplyMutation;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<IReplyMutation, unknown>>
}

const ReplyViewer = ({user, mutationData, goods_id, setLimit, limit, refetch}: IProps) => {
  const [dialog, setDialog] = useState<boolean>(false);
  const replyContent = useRef<HTMLInputElement>(null);
  const validateText = useRef<string>('');
  const goodsReplyMutation = useBoriGoodsReplyMutation(user.email, goods_id);
  const replyRegist = () => {
    if(!replyContent.current)
      return;
    if (!user.email) {
      validateText.current = '로그인후 이용해주세요!'
      setDialog(true);
      return;
    };
    if(replyContent.current.value.length < 2) {
      validateText.current = '최소 두글자는 입력해주세요!'
      setDialog(true);
      return;
    };
    setLimit(limit + 1);
    goodsReplyMutation.mutate(replyContent.current.value);
  };
  const showMoreReply = async () => {
    setLimit(() => {
      return limit + 1;
    });
    setTimeout(() => {
      refetch();
    }, 300);
  }
  return (
    <>
      {
        dialog && <ValidateDialog text={validateText.current} setDialog={setDialog}></ValidateDialog>
      }
      <div className={styles.reply_input_container}>
        <label htmlFor="goods_reply">댓글: </label>
        <input role="reply-input" ref={replyContent} id='goods_reply' type="text"/>
        <button role="regist" onClick={replyRegist}>댓글 등록</button>
      </div>
      <div className={styles.reply_container}>
        {
          goodsReplyMutation.isLoading && <ReplySkeleton></ReplySkeleton>
        }
        {
          mutationData.bori_goods_reply && mutationData.bori_goods_reply.map((reply)=>{
            return <ReplyPart key={reply._id} reply={reply} setDialog={setDialog} validateText={validateText}></ReplyPart>
          })
        }
        {
          !mutationData.overflow && 
          <button className={styles.more_show_button} onClick={() => showMoreReply()}>
            더보기
            <AiFillCaretDown></AiFillCaretDown>
          </button>
        }
      </div>
    </>
  );
};

export default ReplyViewer;
