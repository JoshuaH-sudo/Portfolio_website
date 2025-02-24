"use client";

import React from "react";
import { testimonials } from "./constants";
import { motion } from "motion/react";
import { useAppStore } from "@/providers/app-store-provider";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import ExperienceList from "./experience-list";

const ExperiencePage: React.FC = () => {
  const { onViewPortEnter } = useAppStore((state) => state);
  return (
    <motion.div
      viewport={{ amount: 0.8 }}
      onViewportEnter={() => onViewPortEnter("#experience")}
    >
      <div
        id="experience"
        className="page h-150vh my-15 flex flex-col justify-between gap-0 px-2 md:flex-row md:gap-2"
      >
        <div id="resume" className="mt-15 md:h-full md:w-6xl">
          <BackgroundGradient animate={true}>
            <ExperienceList />
          </BackgroundGradient>
        </div>

        <div id="testimonials">
          <AnimatedTestimonials testimonials={testimonials} autoplay />
        </div>
      </div>
    </motion.div>
  );
};

export default ExperiencePage;
