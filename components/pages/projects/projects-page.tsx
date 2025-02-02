"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsPage = () => {
  return (
    <div id="projects" className="relative z-10 h-screen">
      <div className="z-1 flex h-full flex-col items-center justify-start">
        <h1>Projects</h1>
        <BentoGrid className="mx-auto max-w-4xl">
          {items.map((item, i) => (
            <motion.div
              key={i}
              // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
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

const items = [
  {
    title: (
      <Link
        href="https://apsj.com.au/index.php/journal"
        target="_blank"
        className="text-blue-500 underline"
      >
        The Australian Pharmacy Students (APSJ)
      </Link>
    ),
    description:
      "It is the only peer-reviewed pharmacy student journal in the world, providing pharmacy students around the world with the opportunity to develop research skills and publish their work.",
    header: (
      <Image
        src="/images/projects/apsj.png"
        alt="The Australian Pharmacy Students"
        width={400}
        height={300}
      />
    ),
  },
  {
    title: "Dating Profile Website",
    description:
      "A website to show off in my tinder bio, including a survey to see how compatible we are. 🥴",
    header: (
      <Image
        src="/images/projects/dating-website.png"
        alt="Dating Profile Website"
        width={400}
        height={300}
      />
    ),
  },
  {
    title: "Helsinki city bike (HSL) station finder",
    description: "An exercise for Solita Dev Academy, fullstack application with a React frontend and a Node.js backend running on AWS ECS.",
    header: (
      <Image
        src="/images/projects/hsl-transport-app.gif"
        alt="HSL Transport App"
        width={400}
        height={300}
      />
    ),
  },
];
