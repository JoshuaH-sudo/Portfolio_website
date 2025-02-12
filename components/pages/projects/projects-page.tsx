"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projectItems } from "./constants";

const ProjectsPage = () => {
  return (
    <div id="projects" className="relative z-10 h-screen">
      <div className="z-1 flex h-full flex-col items-center justify-start">
        <BentoGrid className="mx-auto max-w-4xl">
          {projectItems.map((item, i) => (
            <motion.div
              key={i}
              className={i === 0 || i === 3 ? "md:col-span-2" : ""}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.8 }}
            >
              <motion.div variants={cardVariants}>
                <BentoGridItem key={i} {...item} />
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
