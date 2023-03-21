import { ICartGoods } from "@/types/cart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  cart: ICartGoods[];
}

const initialState: IState = {
  cart: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCartState: (state) => {
      Object.assign(state, initialState);
    },
    setCartState: (state, action: PayloadAction<ICartGoods[]>) => {
      state.cart = action.payload;
    }
  },
});

export const { resetCartState } = cartSlice.actions;

export default cartSlice.reducer;
