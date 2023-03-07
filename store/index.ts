import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session"; 

const reducers = combineReducers({
});

const persistConfig: any = {
  key: "root",
  storage: storageSession, // 사용할 스토리지를 정의해요.
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;