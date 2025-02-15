import { Metadata } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Joshua Hoban",
  description:
    "Aussie freelance Fullstack web developer based in Berlin, Germany.",
  openGraph: {
    images: [
      {
        url: "https://joshua-hoban.com/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Joshua Hoban",
      },
    ],
  },
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
