import { IUser } from "@/types/user";
import produce from "immer";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUserState {
  user: IUser;
};

interface IStore extends IUserState {
  setUser: (payload: IUser) => void;
  setUserProfile: (payload: string) => void;
  setGoodsLike: (payload: string) => void;
  resetUser: () => void;
};

const initUser = {
  user: {
    id: "",
    email: ``,
    nick: ``,
    sns_id: "",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: ['123'],
    user_bori_gallery_like: ['123'],
  },
};


export const useUserStore = create<IStore>()(
  persist(
    (set) => ({
      ...initUser,
      setUser: (payload: IUser) =>
        set(produce((state: IUserState) => {
          state.user = payload
      })),
      resetUser: () => {
        set(produce((state: IUserState) => {
          state.user = initUser.user
        }))
      },
      setUserProfile: (payload: string) =>
        set(produce((state: IUserState) => {
          state.user = { ...state.user, profile_image: payload };
      })),
      setGoodsLike: (payload: string) =>
        set(produce((state: IUserState) => {
          state.user = { ...state.user, profile_image: payload };
      })),
    }),
    {
      name: 'user-storage',
    }
  )
);
