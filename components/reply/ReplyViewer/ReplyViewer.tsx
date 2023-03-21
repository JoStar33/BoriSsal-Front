import { IReplyMutation } from '@/types/reply';
import React, { useRef, useState } from 'react';
import styles from './reply_viewer.module.scss';
import ReplyPart from '../ReplyPart/ReplyPart';
import { AiFillCaretDown } from 'react-icons/ai';
import { useBoriGoodsReplyMutation } from '@/hooks/bori-goods/useBoriGoodsReplyMutation/useBoriGoodsReplyMutation';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import ValidateDialog from '@/components/dialogs/ValidateDialog/ValidateDialog';

interface IProps {
  goods_id: string;
  mutationData?: IReplyMutation;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

const ReplyViewer = ({mutationData, goods_id, setLimit, limit}: IProps) => {
  const [dialog, setDialog] = useState<boolean>(false);
  const replyContent = useRef<HTMLInputElement>(null);
  const validateText = useRef<string>('');
  const { user } = useSelector((state: RootState) => state.userStore);
  const goodsReplyMutation = useBoriGoodsReplyMutation(user.id, user.email, goods_id);
  const replyRegist = () => {
    if(!replyContent.current)
      return;
    if(!user.email){
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
  return (
    <>
      {
        dialog && <ValidateDialog text={validateText.current} setDialog={setDialog}></ValidateDialog>
      }
      <div className={styles.reply_input_container}>
        <label htmlFor="goods_reply">댓글: </label>
        <input ref={replyContent} id='goods_reply' type="text" />
        <button role="regist" onClick={replyRegist}>댓글 등록</button>
      </div>
      <div className={styles.reply_container}>
        {
          mutationData?.product_reply && mutationData?.product_reply.map((reply)=>{
            return <ReplyPart key={reply._id} reply={reply} setDialog={setDialog} validateText={validateText}></ReplyPart>
          })
        }
        {
          !mutationData?.overflow && 
          <button className={styles.more_show_button} onClick={() => setLimit(limit + 1)}>
            더보기
            <AiFillCaretDown></AiFillCaretDown>
          </button>
        }
      </div>
    </>
  );
};

export default ReplyViewer;