import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import cartReducer from './cart';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  userStore: userReducer,
  cartStore: cartReducer
});

const persistConfig: any = {
  key: "root",
  storage: storage, // 사용할 스토리지를 정의해요.
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
