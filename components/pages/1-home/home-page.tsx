"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { useEffect } from "react";
import BackgroundBeams from "@/components/ui/background-beams";
import Footer from "@/components/footer";
import { motion } from "motion/react";
import { useAppStore } from "@/providers/app-store-provider";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import Image from "next/image";
import { GlareCard } from "@/components/ui/glare-card";
import useScreen from "@/components/hooks/useScreen";

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
  const { isMobile } = useScreen();
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

          <h5 className="mb-2 flex flex-row items-end justify-center">
            <FlipWords words={words} className="font-andale-mono text-2xl" />
            Developer.
          </h5>
          <GlareCard>
            <Image
              src="/images/josh-card.png"
              alt="me"
              width={372}
              height={520}
            />
          </GlareCard>
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
