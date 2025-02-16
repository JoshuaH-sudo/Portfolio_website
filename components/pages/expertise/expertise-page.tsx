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
    >
      <EverVault>
        <div
          id="expertise"
          className="flex h-screen flex-row items-center justify-center py-30"
        >
          <div className="h-full w-3xl text-left">
            <p id="description" className="text-left text-xl">
              I am a results-driven full-stack web developer with a passion for
              building impactful digital experiences. 🚀 I have accelerated project
              timelines, revitalized a legacy application for 10,000 users, and
              improved conversion rates through personalized sorting algorithms
              and user engagement features. 📈
              <br />
              <br />
              By bridging gaps between engineering, product, and customer care
              teams, I improved communication and efficiency, ensuring smoother
              development cycles. My open approach and humor fostered a
              collaborative atmosphere, strengthening team cohesion and
              engagement. 🤝
              <br />
              <br />
              I have led frontend design for major projects, implemented complex
              plugin systems within weeks, and optimized application security.
              My problem-solving skills have prevented costly rewrites, enhanced
              performance, and refined UI/UX to exceed expectations.
              <br />
              <br />
              Beyond coding, I love to paint 🎨, travel ✈️, do martial arts 🥋
              and learn languages (currently aiming for my B1 in German 🇩🇪). As
              I am always looking to try new things and find ways to how they
              can be combined together. 🌟
            </p>
          </div>

          <div className="mx-5 h-full w-2 rounded-full bg-gray-500" />

          <div
            id="tools"
            className="grid h-full min-w-fit grid-cols-3 items-start gap-5"
          >
            {logos.map((logo) => (
              <motion.div
                key={logo}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                whileDrag={{ scale: 0.95 }}
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.3}
                className="flex h-36 w-36 items-center justify-center rounded-full border-2 border-black bg-white p-2 shadow-lg"
                drag
              >
                <div className="pointer-events-none flex items-center justify-center p-1">
                  <Image
                    src={`/images/logos/${logo}.svg`}
                    width={100}
                    height={100}
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
