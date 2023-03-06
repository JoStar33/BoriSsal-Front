import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import DefaultHeader from '@/components/common/Header/Header';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <DefaultHeader></DefaultHeader>
    <Component {...pageProps} />
  </>
}
