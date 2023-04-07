import DefaultHeader from "@/components/common/Header/Header";
import StatusContainer from "@/components/common/StatusContainer/StatusContainer";
import "@/styles/globals.css";
import { DefaultSeo } from 'next-seo';
import type { AppProps } from "next/app";
import Script from "next/script";
import { QueryClient, QueryClientProvider } from "react-query";
import SEO from '../seo.config';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DefaultSeo {...SEO}/>
        <DefaultHeader/>
        <StatusContainer/>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`}
        />
        <Script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GTAG}');
            `,
          }}
        />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default App;