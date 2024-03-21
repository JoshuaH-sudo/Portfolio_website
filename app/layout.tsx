import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Joshua Hoban",
  description: "Fullstack web developer based in Berlin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const underline = <span className="bg-offBlack block h-0.5 max-w-0 transition-all duration-500 group-hover:max-w-full"></span>
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="relative h-20">
          <Link href="/">
            <h1 className="text-offBlack absolute -bottom-3 left-5 text-7xl font-extrabold italic">
              JH
            </h1>
          </Link>
          <nav
            className="
            text-offWhite flex h-full flex-row items-end pb-0.5
            justify-center bg-primaryLight text-lg font-bold
          "
          >
            <ul className="text-offBlack flex flex-row justify-center gap-5">
              <li className="group transition duration-300">
                <Link href="/">Home</Link>
                {underline}
              </li>
              <li className="group transition duration-300">
                <Link href="/projects">Projects</Link>
                {underline}
              </li>
              <li className="group transition duration-300">
                <a href="/resume.pdf" target="_blank">
                  Resume
                </a>
                {underline}
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
