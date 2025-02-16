import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { tabs } from "./header";
import { motion } from "motion/react";
import { ThemeToggle } from "./ui/theme-toggle";
import { useAppStore } from "@/providers/app-store-provider";
import Link from "next/link";

const MobileNavigation = () => {
  const { activeTab, setActiveTab } = useAppStore((state) => state);
  return (
    <Drawer>
      <DrawerTrigger className="md:hidden">
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-screen max-w-sm">
          <nav className="hidden text-lg font-bold md:block">
            <ul className="flex flex-col justify-center gap-5 px-5">
              {tabs.map((tab) => (
                <li
                  key={tab.name}
                  className="group py-1 transition duration-300"
                >
                  <Link href={tab.href} onClick={() => setActiveTab(tab.href)}>
                    {tab.name}
                  </Link>
                  {activeTab === tab.href && (
                    <motion.div
                      layoutId="clickedbutton"
                      transition={{
                        type: "spring",
                        bounce: 0.3,
                        duration: 0.6,
                      }}
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
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavigation;
