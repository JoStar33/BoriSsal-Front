import { useBoriGoodsChildReplyMutation } from "@/hooks/bori-goods/useBoriGoodsChildReplyMutation/useBoriGoodsChildReplyMutation";
import { IReply } from "@/types/reply";
import { IUser } from "@/types/user";
import { initUser } from "@/utils/initData";
import React, { useRef, useState } from "react";
import ReplyChildPart from "../ReplyChildPart/ReplyChildPart";
import styles from "./reply_part.module.scss";

interface IProps {
  user: IUser;
  reply: IReply;
  setDialog: React.Dispatch<React.SetStateAction<boolean>>;
  dialogText: React.MutableRefObject<string>;
}

const ReplyPart = ({ user, reply, setDialog, dialogText }: IProps) => {
  const [showChildReply, setShowChildReply] = useState<boolean>(false);
  const replyDate = useRef<Date>(new Date(reply.created_at));
  const replyInputRef = useRef<HTMLInputElement>(null);
  if(!user) {
    user = initUser;
  }
  const goodsReplyChildMutation = useBoriGoodsChildReplyMutation(user.email, reply._id);
  const handleOnChilk = () => {
    setShowChildReply(!showChildReply);
  };
  const replyRegist = () => {
    if (!replyInputRef.current) return;
    if (!user) return;
    if (!user.email) {
      setDialog(true);
      dialogText.current = "로그인후 이용해주세요!";
      return;
    }
    if (replyInputRef.current.value.length < 2) {
      dialogText.current = "최소 두글자는 입력해주세요!";
      setDialog(true);
      return;
    }
    goodsReplyChildMutation.mutate(replyInputRef.current.value);
  };
  return (
    <div className={styles.reply_part_container}>
      <div className={styles.reply_info_container}>
        <p>{reply.email}</p>
        <p>{replyDate.current.toLocaleString()}</p>
        <p>{reply.content}</p>
        {showChildReply 
        ? (
          <button className={styles.child_reply_button} onClick={handleOnChilk}>
            닫기
          </button>
          ) 
        : (
            reply.reply_child.length > 0 
            ? (
              <button className={styles.child_reply_button} onClick={handleOnChilk}>
                답글 {reply.reply_child.length}개
              </button>
              ) 
            : (
              <button role='child-reply' className={styles.child_reply_button} onClick={handleOnChilk}>
                답글달기
              </button>
              )
          )
        }
      </div>
      {showChildReply && (
        <div>
          {reply.reply_child.map((replyChild) => {
            return (
              <ReplyChildPart
                key={replyChild.created_at}
                replyChild={replyChild}
              ></ReplyChildPart>
            );
          })}
          <div className={styles.reply_input_container}>
            <label htmlFor="goods_child_reply">댓글: </label>
            <input ref={replyInputRef} id="goods_child_reply" type="text" />
            <button onClick={replyRegist}>댓글 등록</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReplyPart;
