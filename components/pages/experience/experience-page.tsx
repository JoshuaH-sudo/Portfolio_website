"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { experiences, testimonials } from "./constants";
import { motion } from "motion/react";
import { useAppStore } from "@/providers/app-store-provider";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const ExperienceList: FC = () => {
  return (
    <Accordion
      type="single"
      className="rounded-2xl bg-gray-300 dark:bg-neutral-800 p-5"
      defaultValue="0"
    >
      {experiences.map((experience, index) => {
        const { title, date, description } = experience;
        return (
          <AccordionItem key={title} value={index.toString()}>
            <AccordionTrigger>{`${title} ${date}`}</AccordionTrigger>
            <AccordionContent>
              <p>{description}</p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

const ExperiencePage: React.FC = () => {
  const { onViewPortEnter } = useAppStore((state) => state);
  return (
    <motion.div
      viewport={{ amount: 0.8 }}
      onViewportEnter={() => onViewPortEnter("#experience")}
    >
      <div
        id="experience"
        className="flex h-screen w-full flex-row justify-between gap-2 px-20 pt-10"
      >
        <div id="experience" className="flex h-full w-6xl flex-col gap-2">
          <BackgroundGradient animate={true}>
            <ExperienceList />
          </BackgroundGradient>
        </div>

        <div id="testimonials" className="h-full w-full">
          <AnimatedTestimonials testimonials={testimonials} autoplay />
        </div>
      </div>
    </motion.div>
  );
};

export default ExperiencePage;
