import produce from "immer";
import { create } from "zustand";

interface IPageState {
  pageState: string;
};

interface IStore extends IPageState {
  setPageState: (payload: string) => void;
};

const initPageState = {
  pageState: ''
};


export const usePageStore = create<IStore>()(
  set => ({
    ...initPageState,
    setPageState: (payload: string) =>
      set(produce((state: IPageState) => {
        state.pageState = payload;
    })),
  })
);
