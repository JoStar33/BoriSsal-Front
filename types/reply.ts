export interface IReply {
  _id: string;
  email: string;
  content: string;
  reply_child: IReplyChild[];
  created_at: string;
}

export interface IReplyChild {
  email: string;
  content: string;
  created_at: string;
}

export interface IReplyMutation {
  bori_gallery_reply: IReply[];
  bori_goods_reply: IReply[];
  overflow: boolean
}