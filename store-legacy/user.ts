import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types/user";

interface IState {
  user: IUser;
  pageState: string;
}

const initialState: IState = {
  user: {
    id: "",
    email: ``,
    nick: ``,
    sns_id: "",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: [],
  },
  pageState: ''
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserState: (state) => {
      Object.assign(state, initialState);
    },
    setUserState: (state, action: PayloadAction<IUser>) => {
      Object.assign(state.user, action.payload);
    },
    setUserProfileState: (state, action: PayloadAction<string>) => {
      state.user = {...state.user, profile_image: action.payload}
    },
    setGoodsLike: (state, action: PayloadAction<string>) => {
      state.user.user_bori_goods_like.find(likeGoods => likeGoods === action.payload) 
      ? state.user.user_bori_goods_like = state.user.user_bori_goods_like.filter(likeGoods => likeGoods !== action.payload)
      : state.user.user_bori_goods_like.push(action.payload);
    },
    setPageState: (state, action: PayloadAction<string>) => {
      state.pageState = action.payload;
    }
  },
});

export const { resetUserState, setUserState, setUserProfileState, setGoodsLike, setPageState } = userSlice.actions;

export default userSlice.reducer;
