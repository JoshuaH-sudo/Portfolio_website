"use client";
import { useAppStore } from "@/providers/app-store-provider";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect } from "react";
import { ThemeToggle } from "./ui/theme-toggle";
import MobileNavigation from "./mobile-navigation";

export const tabs = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Expertise",
    href: "#expertise",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

function Header() {
  const { activeTab, setActiveTab } = useAppStore((state) => state);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) setActiveTab(window.location.hash);
  }, []);

  return (
    <header className="font-andale-mono bg-off-white[.5] dark:bg-off-black/[.5] fixed top-0 z-1000 flex h-15 w-full flex-row items-center justify-end gap-2 px-5 py-1 backdrop-blur-3xl transition-colors duration-300 md:justify-between md:px-20">
      <Link href="#home" className="expand grow pl-10 md:grow-0 md:pl-0">
        <p className="font-monomaniac-one text-xl font-extrabold">
          Joshua Hoban
        </p>
      </Link>

      <MobileNavigation />

      <div className="flex flex-row items-center gap-5">
        <nav className="hidden text-lg font-bold md:block">
          <ul className="flex flex-row justify-center gap-5">
            {tabs.map((tab) => (
              <li
                key={tab.name}
                className="group expand py-1 transition duration-300"
              >
                <Link href={tab.href} onClick={() => setActiveTab(tab.href)}>
                  {tab.name}
                </Link>
                {activeTab === tab.href && (
                  <motion.div
                    layoutId="clickedbutton"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    className="h-1 rounded-full bg-gray-800 dark:bg-gray-200"
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
