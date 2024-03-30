import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/header";
import { CSPostHogProvider } from "./providers";

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
      <CSPostHogProvider>
        <body className={inter.className + " bg-offBlack"}>
          <Header />
          <div className="animate-fade-in pt-4 bg-offBlack">{children}</div>
          <Analytics />
          <SpeedInsights />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
