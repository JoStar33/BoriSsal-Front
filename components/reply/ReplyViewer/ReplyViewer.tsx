import { IReply } from "@/types/reply";
import React, { useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useBoriGoodsReplyMutation } from "@/hooks/bori-goods/useBoriGoodsReplyMutation";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import styles from "./reply_viewer.module.scss";
import ReplyPart from "../ReplyPart/ReplyPart";
import ValidateDialog from "@/components/dialogs/ValidateDialog/ValidateDialog";

interface IProps {
  reply?: IReply[];
  goods_id: string;
}

const ReplyViewer = ({ reply, goods_id }: IProps) => {
  const [dialog, setDialog] = useState<boolean>(false);
  const { user } = useSelector((state: RootState) => state.userStore);
  const replyContent = useRef<HTMLInputElement>(null);
  const validateText = useRef<string>("");
  const goodsReplyMutation = useBoriGoodsReplyMutation(
    user.id,
    user.email,
    goods_id
  );
  const replyRegist = () => {
    if (!user.email) {
      validateText.current = "로그인후 이용해주세요!";
      setDialog(true);
      return;
    }
    if (!replyContent.current) return;
    if (replyContent.current.value.length < 2) {
      validateText.current = "최소 두글자는 입력해주세요!";
      setDialog(true);
      return;
    }
    console.log(replyContent.current.value);
    goodsReplyMutation.mutate(replyContent.current.value);
  };
  return (
    <>
      {dialog && (
        <ValidateDialog
          text={validateText.current}
          setDialog={setDialog}
        ></ValidateDialog>
      )}
      <div className={styles.reply_input_container}>
        <label htmlFor="goods_reply">댓글: </label>
        <input ref={replyContent} id="goods_reply" type="text" />
        <button role="regist" onClick={replyRegist}>
          댓글 등록
        </button>
      </div>
      <div className={styles.reply_container}>
        {reply &&
          reply.map((replyElement) => {
            return (
              <ReplyPart
                key={replyElement._id}
                reply={replyElement}
              ></ReplyPart>
            );
          })}
        {reply && (
          <button className={styles.more_show_button}>
            더보기
            <AiFillCaretDown></AiFillCaretDown>
          </button>
        )}
      </div>
    </>
  );
};

export default ReplyViewer;
