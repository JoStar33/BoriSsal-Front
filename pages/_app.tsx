import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { store }from '../store';
import DefaultHeader from '@/components/common/Header/Header';

export let persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <DefaultHeader></DefaultHeader>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
