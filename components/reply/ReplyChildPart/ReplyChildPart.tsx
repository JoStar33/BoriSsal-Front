import { IReplyChild } from '@/types/reply';
import React from 'react';
import styles from './reply_child_part.module.scss';

interface IProps {
  replyChild: IReplyChild;
}

const ReplyChildPart = ({replyChild}: IProps) => {
  return (
    <div className={styles.reply_child_part_container}>
      <p>{replyChild.email}</p>
      <p>{replyChild.created_at}</p>
      <p>{replyChild.content}</p>
    </div>
  );
};

export default ReplyChildPart;