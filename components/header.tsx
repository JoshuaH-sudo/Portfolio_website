"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
const tabs = [
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
export default function Header() {
  const [activeTab, setActiveTab] = useState("");
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) setActiveTab(window.location.hash);
    else setActiveTab("#home");
  }, []);

  return (
    <header className="font-andale-mono bg-off-white fixed top-0 z-100 flex w-full items-center justify-between py-1 pr-5 pl-20 transition-colors duration-300">
      <Link href="#home">
        <p className="text-off-black font-monomaniac-one text-xl font-extrabold">
          Joshua Hoban
        </p>
      </Link>

      <nav className="flex flex-row justify-end pr-2 pb-0.5 text-lg font-bold">
        <ul className="text-off-black flex flex-row justify-center gap-5">
          {tabs.map((tab) => (
            <li key={tab.name} className="group transition duration-300">
              <Link href={tab.href} onClick={() => setActiveTab(tab.href)}>
                {tab.name}
              </Link>
              {activeTab === tab.href && (
                <motion.div
                  layoutId="clickedbutton"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className="h-1 rounded-full bg-gray-800"
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
