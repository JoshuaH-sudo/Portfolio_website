"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import BackgroundBeams from "@/components/ui/background-beams";
import Footer from "@/components/footer";
import { motion } from "motion/react";
import { useAppStore } from "@/providers/app-store-provider";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";

const words = [
  "Front-end",
  "Back-end",
  "Full-stack",
  "React",
  "Typescript",
  "CSS",
  "Mobile",
  "Aussie",
  "JavaScript",
  "NodeJs",
  "Agile",
  "Web"
];

export const HomePage = () => {
  const { onViewPortEnter, setActiveTab } = useAppStore((state) => state);
  return (
    <motion.div
      viewport={{ amount: 0.8 }}
      onViewportEnter={() => onViewPortEnter("#home")}
    >
      <div
        id="home"
        className="relative page mx-auto"
        // When the user scrolls to this section set the active tab to home
      >
        <div className="relative z-10 flex flex-col items-center justify-center my-auto">
          <h1>Joshua Hoban.</h1>
          <h5 className="flex flex-row justify-center items-end">
            <FlipWords words={words} className="font-andale-mono text-2xl" />
            Developer.
          </h5>
          <div className="h-40 w-40 md:h-96 md:w-96">
            <DotLottieReact src="/lottie/profile-pic.json" loop autoplay />
          </div>
        </div>
        <Link
          href="#expertise"
          className="z-30 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-20 md:w-35 md:h-35"
          onClick={() => setActiveTab("#expertise")}
        >
          <DotLottieReact src="/lottie/arrow-indicator.json" loop autoplay />
        </Link>
        <Footer />
        <BackgroundBeams />
      </div>
    </motion.div>
  );
};
