import produce from "immer";
import { create } from "zustand";

interface IDialogState {
  dialog: boolean;
  dialogText: string;
  successDialog: boolean;
  successDialogText: string;
};

interface IStore extends IDialogState {
  setDialog: (payload: boolean) => void;
  setDialogText: (payload: string) => void;
  setSuccessDialog: (payload: boolean) => void;
  setSuccessDialogText: (payload: string) => void;
};

const initDialogState = {
  dialog: false,
  dialogText: '',
  successDialog: false,
  successDialogText: ''
};


export const useDialogStore = create<IStore>()(
  set => ({
    ...initDialogState,
    setDialog: (payload: boolean) =>
      set(produce((state: IDialogState) => {
        state.dialog = payload;
    })),
    setDialogText: (payload: string) =>
      set(produce((state: IDialogState) => {
        state.dialogText = payload;
    })),
    setSuccessDialog: (payload: boolean) =>
      set(produce((state: IDialogState) => {
        state.successDialog = payload;
    })),
    setSuccessDialogText: (payload: string) =>
      set(produce((state: IDialogState) => {
        state.successDialogText = payload;
    })),
  })
);
