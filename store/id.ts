import { IUser } from "@/types/user";
import produce from "immer";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IIdState {
  id: string;
};

interface IStore extends IIdState {
  setId: (payload: string) => void;
  resetId: () => void;
};

const initId = {
  id: ''
};


export const useIdStore = create<IStore>()(
  persist(
    (set) => ({
      ...initId,
      setId: (payload: string) =>
        set(produce((state: IIdState) => {
          state.id = payload
      })),
      resetId: () => {
        set(produce((state: IIdState) => {
          state.id = initId.id
        }))
      }
    }),
    {
      name: 'id',
    }
  )
);
