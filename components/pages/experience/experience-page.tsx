import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import React, { FC } from "react";
import { experiences } from "./constants";

interface Testimonial {
  name: string;
  role: string;
  testimonial: string;
}
interface Experience {
  title: string;
  date: string;
  description: string;
  testimonials: Testimonial[];
  socials?: Partial<{
    website: string;
    linkedin: string;
    github: string;
    twitter: string;
  }>;
}

interface TestimonialProps {
  testimonial: Testimonial;
}

const Testimonial: FC<TestimonialProps> = ({ testimonial }) => {
  const { name, role, testimonial: content } = testimonial;

  return (
    <div key={name} className="flex h-full flex-col bg-gray-200">
      <div className="flex flex-row items-center justify-between bg-gray-400 p-4">
        <div className="flex flex-col bg-gray-400">
          <p>{name}</p>
          <p>{role}</p>
        </div>
        <Image
          src="/images/profile.png"
          alt="Picture of the author"
          width={100}
          height={100}
        />
      </div>
      <p className="p-2">{content}</p>
    </div>
  );
};

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ experience }) => {
  const { title, date, description, testimonials } = experience;

  return (
    <div className="flex h-full w-full max-w-7xl flex-row items-start justify-between gap-2 px-20">
      <div className="w-full text-left">
        <Accordion type="single" collapsible className="w-full bg-gray-300 p-5">
          <AccordionItem value="item-1">
            <AccordionTrigger>{`${title} ${date}`}</AccordionTrigger>
            <AccordionContent>{description}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div id="testimonials" className="h-full">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

const ExperiencePage: React.FC = () => {
  return (
    <div id="experience" className="flex h-screen justify-center pt-20 pb-10">
      {experiences.map((experience) => (
        <ExperienceItem key={experience.title} experience={experience} />
      ))}
    </div>
  );
};

export default ExperiencePage;
