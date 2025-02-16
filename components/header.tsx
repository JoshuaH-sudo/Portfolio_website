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
    <header className="font-andale-mono bg-off-white dark:bg-off-black fixed top-0 z-1000 flex h-15 w-screen items-center gap-2 justify-end md:justify-between px-5 md:px-20 py-1 transition-colors duration-300 flex-row">
      <Link href="#home">
        <p className="font-monomaniac-one text-xl font-extrabold">
          Joshua Hoban
        </p>
      </Link>

      <nav className="hidden text-lg font-bold md:block">
        <ul className="flex flex-row justify-center gap-5">
          {tabs.map((tab) => (
            <li key={tab.name} className="group py-1 transition duration-300">
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
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>

      <MobileNavigation />
    </header>
  );
}

export default Header;
