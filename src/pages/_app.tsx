import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id="first-sc" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

<Script id="second-sc" strategy="lazyOnload">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
</Script>


<Head>
    <title>Welcome!</title>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
</Head>

<Component {...pageProps} />
    </>
  
   )
}
