import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import { QueryClientProvider, QueryClient } from "react-query";
import DefaultHeader from "@/components/common/Header/Header";
import React from "react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <DefaultHeader></DefaultHeader>
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
    </>
  );
}
