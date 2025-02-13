"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { experiences } from "./constants";
import { Testimonial } from "./types";
import { motion } from "motion/react";
import { useAppStore } from "@/providers/app-store-provider";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: FC<TestimonialCarouselProps> = ({
  testimonials,
}) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (currentTestimonialIndex + 1) % testimonials.length,
    );
  };

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(nextTestimonial, 3000);
    return () => clearInterval(interval);
  }, [currentTestimonialIndex]);

  if (testimonials.length === 0) return null;

  const {
    name,
    role,
    testimonial: content,
  } = testimonials[currentTestimonialIndex];
  return (
    <div key={name} className="flex h-full flex-col">
      <motion.div
        className="rounded-b-2xl"
        initial={{ width: 0, overflow: "hidden" }}
        exit={{ width: 0, overflow: "hidden" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex flex-row items-center justify-between rounded-tr-2xl bg-gray-400 p-4">
          <div className="flex flex-col">
            <p>{name}</p>
            <p>{role}</p>
          </div>
          <Image
            src={`/images/testimonials/${name.toLowerCase().replace(" ", "-")}.jpg`}
            alt={`${name} profile`}
            width={100}
            height={100}
            className="rounded-full shadow-lg"
          />
        </div>
        <p className="h-full overflow-auto bg-gray-300 p-4">{content}</p>
      </motion.div>
    </div>
  );
};

interface ExperienceListProps {
  selectTab?: (index: number) => void;
}

const ExperienceList: FC<ExperienceListProps> = ({ selectTab }) => {
  return (
    <div className="w-full text-left">
      <Accordion type="single" className="w-full bg-gray-300 p-5">
        {experiences.map((experience, index) => {
          const { title, date, description } = experience;
          return (
            <AccordionItem key={title} value={title}>
              <AccordionTrigger
                onClick={() => selectTab && selectTab(index)}
              >{`${title} ${date}`}</AccordionTrigger>
              <AccordionContent>
                <p>{description}</p>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

const ExperiencePage: React.FC = () => {
  const { setActiveTab } = useAppStore((state) => state);
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  const { testimonials } = experiences[selectedExperienceIndex];
  return (
    <motion.div
      viewport={{ amount: 0.8 }}
      onViewportEnter={() => setActiveTab("#experience")}
    >
      <div
        id="experience"
        className="flex h-screen w-full flex-row gap-2 px-20 pt-20 pb-10"
      >
        <div id="experience" className="flex h-full min-w-5xl flex-col gap-2">
          <div className="flex-row items-start justify-between gap-2">
            <ExperienceList selectTab={setSelectedExperienceIndex} />
          </div>
        </div>
        <div id="testimonials" className="h-full w-full">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </motion.div>
  );
};

export default ExperiencePage;
