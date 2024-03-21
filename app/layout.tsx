import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

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
            text-offWhite flex h-full flex-row items-end
            justify-center bg-primaryLight text-lg font-bold
          "
          >
            <ul className="text-offBlack flex flex-row justify-center gap-5">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
