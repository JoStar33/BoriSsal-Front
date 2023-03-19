import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types/user";

interface IState {
  user: IUser;
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
    user_product_like: [],
    user_bori_gallery_like: [],
  },
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
  },
});

export const { resetUserState, setUserState, setUserProfileState } = userSlice.actions;

export default userSlice.reducer;
