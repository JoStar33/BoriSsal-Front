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
    },
    increaseCartState: (state, action: PayloadAction<ICartGoods>) => {
      state.cart = state.cart.map(cart => {
        if(cart.bori_goods_id === action.payload.bori_goods_id)
          cart.bori_goods_count++;
        return cart;
      })
    },
    decreaseCartState: (state, action: PayloadAction<ICartGoods>) => {
      state.cart = state.cart.map(cart => {
        if((cart.bori_goods_id === action.payload.bori_goods_id) && cart.bori_goods_count >= 0)
          cart.bori_goods_count--;
        return cart;
      })
    },
  },
});

export const { resetCartState, setCartState, deleteCartState, increaseCartState, decreaseCartState } = cartSlice.actions;

export default cartSlice.reducer;
