import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

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
        <header className="h-20">
          <nav
            className="
            bg-primaryLight text-offWhite flex h-full flex-row
            items-end justify-center text-lg font-bold
          "
          >
            <ul className="flex flex-row justify-center gap-5 text-offBlack">
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
      </body>
    </html>
  );
}
