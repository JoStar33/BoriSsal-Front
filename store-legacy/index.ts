import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import cartReducer from './cart';

const reducers = combineReducers({
  userStore: userReducer,
  cartStore: cartReducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
