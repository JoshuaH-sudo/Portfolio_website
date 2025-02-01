"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollision";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { motion, Variants } from "motion/react";
import React from "react";

const ProjectsPage = () => {
  return (
    <div id="projects" className="relative z-10 h-screen">
      <div className="z-1 flex h-full flex-col items-center justify-center">
        <h1>Projects</h1>
        <BentoGrid className="mx-auto max-w-4xl">
          {items.map((item, i) => (
            <motion.div
              // className={`card-container-${i}`}
              key={i}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.8 }}
            >
              <motion.div variants={cardVariants}>
                <BentoGridItem
                  key={i}
                  {...item}
                />
              </motion.div>
            </motion.div>
          ))}
        </BentoGrid>
      </div>
      <BackgroundBeamsWithCollision />
    </div>
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

const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives. Understand the impact of effective communication in our lives. Understand the impact of effective communication in our lives. ",
    header: <Skeleton />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
  },
];
