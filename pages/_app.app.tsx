import DefaultHeader from "@/components/common/Header/Header";
import "@/styles/globals.css";
import { DefaultSeo } from 'next-seo';
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import SEO from '../seo.config';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DefaultSeo {...SEO}/>
        <DefaultHeader/>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
