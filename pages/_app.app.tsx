import DefaultHeader from "@/components/common/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DefaultHeader></DefaultHeader>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
