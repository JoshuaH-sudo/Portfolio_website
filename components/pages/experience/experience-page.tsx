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

interface TestimonialProps {
  testimonial: Testimonial;
}

const TestimonialItem: FC<TestimonialProps> = ({ testimonial }) => {
  const { name, role, testimonial: content } = testimonial;

  return (
    <div
      key={name}
      className="flex h-full flex-col rounded-r-2xl rounded-bl-2xl bg-gray-200"
    >
      <div className="flex flex-row items-center justify-between rounded-r-2xl rounded-bl-2xl bg-gray-400 p-4">
        <div className="flex flex-col bg-gray-400">
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
      <p className="p-2 overflow-y-auto">{content}</p>
    </div>
  );
};

interface ExperienceItemProps {
  onClick?: () => void;
  experience: Experience;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ experience, onClick }) => {
  const { title, date, description, testimonials } = experience;

  return (
    <div className="flex-row items-start justify-between gap-2">
      <div className="w-full text-left">
        <Accordion type="single" collapsible className="w-full bg-gray-300 p-5">
          <AccordionItem value="item-1">
            <AccordionTrigger
              onClick={onClick}
            >{`${title} ${date}`}</AccordionTrigger>
            <AccordionContent>{description}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
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
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={experience.title}
            experience={experience}
            onClick={() => setSelectedExperienceIndex(index)}
          />
        ))}
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
