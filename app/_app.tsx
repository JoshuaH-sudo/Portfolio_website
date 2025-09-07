import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
        <meta name="google-site-verification" content="IkPDk7mPq-mEFT0ZF-l4GSKRZDTC0xPa-qMfAZjZChU" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
