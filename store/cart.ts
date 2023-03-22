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
    deleteCartState: (state, action: PayloadAction<ICartGoods>) => {
      state.cart = state.cart.filter((cartElement) => {
        cartElement.bori_goods_id !== action.payload.bori_goods_id
      });
    },
    setCartState: (state, action: PayloadAction<ICartGoods[]>) => {
      state.cart = action.payload;
    }
  },
});

export const { resetCartState, setCartState, deleteCartState } = cartSlice.actions;

export default cartSlice.reducer;
