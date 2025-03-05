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
  "Web",
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
        className="page relative mx-auto"
        // When the user scrolls to this section set the active tab to home
      >
        <div className="relative z-10 my-auto flex flex-col items-center justify-center">
          <h1>Joshua Hoban.</h1>

          <h5 className="flex flex-row items-end justify-center">
            <FlipWords words={words} className="font-andale-mono text-2xl" />
            Developer.
          </h5>
          <motion.div
            initial={{ scale: 1, opacity: 0.9 }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <div className="expand h-40 w-40 md:h-96 md:w-96">
              <DotLottieReact src="/lottie/profile-pic.json" loop autoplay />
            </div>
          </motion.div>
        </div>
        <Link
          href="#expertise"
          className="expand absolute bottom-0 left-1/2 z-20 h-10 w-10 -translate-x-1/2 transform md:h-20 md:w-20"
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
