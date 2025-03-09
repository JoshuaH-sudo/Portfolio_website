"use client";

import React from "react";
import { testimonials } from "./constants";
import { motion } from "motion/react";
import { useAppStore } from "@/providers/app-store-provider";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import ExperienceList from "./experience-list";
import useScreen from "@/components/hooks/useScreen";

const ExperiencePage: React.FC = () => {
  const { isMobile } = useScreen();
  const { onViewPortEnter } = useAppStore((state) => state);
  return (
    <motion.div
      viewport={{ amount: 0.8 }}
      onViewportEnter={() => onViewPortEnter("#experience")}
    >
      <div
        id="experience"
        className="page flex flex-col justify-between gap-10 px-2 md:flex-row md:pt-30"
      >
        <div id="resume" className="h-screen md:h-full md:w-6xl">
          <BackgroundGradient animate={true}>
            <ExperienceList />
          </BackgroundGradient>
        </div>

        <div id="testimonials" className="h-screen md:h-full">
          <AnimatedTestimonials testimonials={testimonials} autoplay={!isMobile} />
        </div>
      </div>
    </motion.div>
  );
};

export default ExperiencePage;
