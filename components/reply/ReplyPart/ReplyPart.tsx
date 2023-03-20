import { IReply } from '@/types/reply';
import React, { useRef, useState } from 'react';
import ReplyChildPart from '../ReplyChildPart/ReplyChildPart';
import styles from './reply_part.module.scss';

interface IProps {
  reply: IReply;
}

const ReplyPart = ({reply}: IProps) => {
  const [showChildReply, setShowChildReply] = useState<boolean>(false);
  const replyDate = useRef(new Date(reply.created_at));
  const handleOnChilk = () => {
    setShowChildReply(!showChildReply);
  }
  return (
    <div className={styles.reply_part_container}>
      <div className={styles.reply_info_container}>
        <p>{reply.email}</p>
        <p>{replyDate.current.toLocaleString()}</p>
        <p>{reply.content}</p>
        <button 
          className={styles.child_reply_button} 
          onClick={handleOnChilk}>답글 {reply.reply_child.length}개</button>
      </div>
      {
        showChildReply && (
          <div>
            {
              reply.reply_child.map((replyChild) =>
                { 
                  return <ReplyChildPart key={replyChild.created_at} replyChild={replyChild}></ReplyChildPart>
                })
            }
            <div className={styles.reply_input_container}>
              <label htmlFor="goods_child_reply">댓글: </label>
              <input id='goods_child_reply' type="text" />
              <button>댓글 등록</button>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default ReplyPart;