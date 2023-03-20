export interface IReply {
  _id: string;
  user_id: string;
  email: string;
  content: string;
  reply_child: IReplyChild[];
  created_at: string;
}

export interface IReplyChild {
  user_id: string;
  email: string;
  content: string;
  created_at: string;
}