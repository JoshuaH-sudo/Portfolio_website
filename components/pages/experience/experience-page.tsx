"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import React, { FC, useState } from "react";
import { experiences } from "./constants";
import { Experience, Testimonial } from "./types";
import { delay, motion } from "motion/react";

interface TestimonialProps {
  testimonial: Testimonial;
}

const TestimonialItem: FC<TestimonialProps> = ({ testimonial }) => {
  const { name, role, testimonial: content } = testimonial;
  return (
    <div key={name} className="flex h-full flex-col">
      <motion.div
        className="rounded-b-2xl"
        initial={{ width: 0, overflow: "hidden" }}
        animate={{ width: "100%" }}
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
              <AccordionContent>{description}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

const ExperiencePage: React.FC = () => {
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  const { testimonials } = experiences[selectedExperienceIndex];
  return (
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
        {testimonials.map((testimonial) => (
          <TestimonialItem key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
