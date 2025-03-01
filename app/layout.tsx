import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/header";
import { CSPostHogProvider } from "./providers";
import { AppStoreProvider } from "@/providers/app-store-provider";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Joshua Hoban",
  description:
    "Aussie freelance Fullstack web developer based in Berlin, Germany.",
  openGraph: {
    images: [
      {
        url: "https://joshua-hoban.com/images/open-graph-image.png",
        width: 1200,
        height: 630,
        alt: "Joshua Hoban",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn(inter.className, "bg-off-white dark:bg-off-black")}>
        <Analytics />
        <SpeedInsights />
        <CSPostHogProvider>
          <AppStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              <main>{children}</main>
            </ThemeProvider>
          </AppStoreProvider>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
