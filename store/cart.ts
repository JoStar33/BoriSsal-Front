import { ICartGoods } from '@/types/cart';
import { stat } from 'fs';
import produce from 'immer';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ICartState {
  cart: ICartGoods[];
}

interface IUpdateCart {
  cart_id: string;
  bori_goods_count: number;
}

interface IStore extends ICartState {
  setCart: (payload: ICartGoods[]) => void;
  resetCart: () => void;
  increaseCart: (payload: ICartGoods) => void;
  updateCartCount: (payload: IUpdateCart) => void;
  decreaseCart: (payload: ICartGoods) => void;
  deleteCart: (payload: ICartGoods) => void;
}

const initCart = {
  cart: [],
};

export const useCartStore = create<IStore>()(
  persist(
    (set) => ({
      ...initCart,
      setCart: (payload: ICartGoods[]) =>
        set(
          produce((state: ICartState) => {
            state.cart = payload;
          }),
        ),
      resetCart: () => {
        set(
          produce((state: ICartState) => {
            state.cart = initCart.cart;
          }),
        );
      },
      increaseCart: (payload: ICartGoods) =>
        set(
          produce((state: ICartState) => {
            state.cart = state.cart.map((cart) => {
              if (cart.bori_goods_id === payload.bori_goods_id) cart.bori_goods_count++;
              return cart;
            });
          }),
        ),
      updateCartCount: (payload: IUpdateCart) => {
        set(
          produce((state: ICartState) => {
            state.cart = state.cart.map((cart) => {
              if (cart.bori_goods_id === payload.cart_id) {
                cart.bori_goods_count = payload.bori_goods_count;
              }
              return cart;
            });
          }),
        );
      },
      decreaseCart: (payload: ICartGoods) =>
        set(
          produce((state: ICartState) => {
            state.cart = state.cart.map((cart) => {
              if (cart.bori_goods_id === payload.bori_goods_id) cart.bori_goods_count--;
              return cart;
            });
          }),
        ),
      deleteCart: (payload: ICartGoods) =>
        set(
          produce((state: ICartState) => {
            state.cart = state.cart.filter((cartElement) => {
              cartElement.bori_goods_id !== payload.bori_goods_id;
            });
          }),
        ),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
