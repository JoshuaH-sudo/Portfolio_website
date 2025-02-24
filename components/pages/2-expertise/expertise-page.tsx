"use client";
import { EverVault } from "@/components/ui/ever-vault";
import { useAppStore } from "@/providers/app-store-provider";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import BreathingGrid from "./breathing-grid";

const logos = [
  "react",
  "react-native",
  "typescript",
  "tailwind-css",
  "nodejs",
  "next-js",
  "docker",
  "prisma",
  "mongodb",
  "postgresql",
  "figma",
  "posthog",
];
const ExpertisePage = () => {
  const { onViewPortEnter } = useAppStore((state) => state);
  return (
    <motion.div
      viewport={{ amount: 0.8 }}
      onViewportEnter={() => onViewPortEnter("#expertise")}
    >
      <EverVault className=" snap-start">
        <div
          id="expertise"
          className="page flex flex-col items-center justify-center md:flex-row"
        >
          <div className="my-auto w-full overflow-auto md:w-3xl">
            <p
              id="description"
              className="rounded-2xl border-white/50 p-2 text-sm md:text-xl"
            >
              I'm a <strong>full-stack web developer</strong> passionate about
              building impactful digital experiences. 🚀 I’ve optimized
              performance, revitalized a <strong>legacy app</strong> for 10,000
              users, and improved
              <strong> conversion rates</strong>. I bridge gaps between teams,
              streamline development, and foster a{" "}
              <strong>collaborative atmosphere</strong>. 🤝 Beyond coding, I
              love <strong>painting</strong> 🎨, <strong>traveling</strong> ✈️,
              and learning languages—currently working on my B1 in{" "}
              <strong>German</strong> 🇩🇪.
            </p>
          </div>

          <div className="my-5 h-2 w-full rounded-full bg-gray-500 md:mx-5 md:my-0 md:h-80 md:w-2" />

          <BreathingGrid logos={logos} />
        </div>
      </EverVault>
    </motion.div>
  );
};

export default ExpertisePage;
