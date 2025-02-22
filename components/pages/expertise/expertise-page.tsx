"use client";
import { EverVault } from "@/components/ui/ever-vault";
import { useAppStore } from "@/providers/app-store-provider";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

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
      className="h-screen"
    >
      <EverVault>
        <div
          id="expertise"
          className="page relative flex flex-col items-center justify-center md:flex-row h-full"
        >
          <div className="w-full overflow-auto md:w-3xl my-auto">
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

          <div
            id="tools"
            className="grid my-auto grid-cols-4 items-start gap-2 pr-2 md:grid-cols-3 md:gap-5 md:pr-0"
          >
            {logos.map((logo) => (
              <motion.div
                key={logo}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                whileDrag={{ scale: 0.95 }}
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.3}
                className="flex h-15 w-15 items-center justify-center rounded-full border-2 border-black bg-white p-2 shadow-lg md:h-30 md:w-30"
                drag
              >
                <div className="pointer-events-none flex items-center justify-center p-1">
                  <Image
                    src={`/images/logos/${logo}.svg`}
                    width={80}
                    height={80}
                    alt={logo}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </EverVault>
    </motion.div>
  );
};

export default ExpertisePage;
