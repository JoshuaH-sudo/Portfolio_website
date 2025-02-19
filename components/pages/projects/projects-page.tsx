"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion, Variants } from "motion/react";
import React from "react";
import { projectItems } from "./constants";
import { useAppStore } from "@/providers/app-store-provider";

const ProjectsPage = () => {
  const { onViewPortEnter } = useAppStore((state) => state);
  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  return (
    <motion.div
      viewport={{ amount: 0.8 }}
      onViewportEnter={() => onViewPortEnter("#projects")}
    >
      <div id="projects" className="relative page">
        <div className="flex h-full flex-col items-center justify-center">
          <BentoGrid className="mx-auto max-w-4xl">
            {projectItems.map((item, i) => (
              <motion.div
                key={i}
                className={i === 0 || i === 3 ? "md:col-span-2" : ""}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.8 }}
              >
                <motion.div variants={!isMobile ? cardVariants : {}}>
                  <BentoGridItem key={i} {...item} />
                </motion.div>
              </motion.div>
            ))}
          </BentoGrid>
        </div>
        <BackgroundBeamsWithCollision />
      </div>
    </motion.div>
  );
};

const cardVariants: Variants = {
  offscreen: {
    y: 300,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
    opacity: 0,
  },
  onscreen: {
    y: 50,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default ProjectsPage;
