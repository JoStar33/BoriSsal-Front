import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { store }from '../store';
import { QueryClientProvider, QueryClient } from "react-query";
import DefaultHeader from '@/components/common/Header/Header';

const queryClient = new QueryClient();
export let persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <DefaultHeader></DefaultHeader>
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
      </QueryClientProvider>
    </>
  );
}
