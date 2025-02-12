import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/header";
import { CSPostHogProvider } from "./providers";
import { AppStoreProvider } from "@/providers/app-store-provider";

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
    <html lang="en" className="scroll-smooth">
      <Analytics />
      <SpeedInsights />
      <CSPostHogProvider>
        <AppStoreProvider>
          <body className={inter.className + " bg-off-white"}>
            <Header />
            <div>{children}</div>
          </body>
        </AppStoreProvider>
      </CSPostHogProvider>
    </html>
  );
}
