import React from "react";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { tabs } from "./header";
import { motion } from "motion/react";
import { useAppStore } from "@/providers/app-store-provider";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const MobileNavigation = () => {
  const { activeTab, setActiveTab } = useAppStore((state) => state);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="md:hidden">
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:bg-off-black bg-off-white w-30 z-1000">
        <DropdownMenuGroup>
          {tabs.map((tab) => (
            <DropdownMenuItem key={tab.name}>
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
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNavigation;
