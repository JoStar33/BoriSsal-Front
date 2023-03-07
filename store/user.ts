import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInfo } from "../types/user";

const initialState = {
  user: {
    id: '',
    email: ``,
    nick: ``,
  } as userInfo,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserState: (state) => {
      Object.assign(state, initialState);
    },
    setUserState: (state, action: PayloadAction<userInfo>) => {
      Object.assign(state.user, action.payload);
    }
  },
});

export const {
  resetUserState,
  setUserState
} = userSlice.actions;

export default userSlice.reducer;