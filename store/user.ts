import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userType } from "../types/user";

const initialState = {
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
  } as userType,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserState: (state) => {
      Object.assign(state, initialState);
    },
    setUserState: (state, action: PayloadAction<userType>) => {
      Object.assign(state.user, action.payload);
    },
  },
});

export const { resetUserState, setUserState } = userSlice.actions;

export default userSlice.reducer;
