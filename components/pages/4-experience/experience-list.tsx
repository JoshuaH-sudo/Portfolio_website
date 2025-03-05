"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FC } from "react";
import { experiences } from "./constants";

const ExperienceList: FC = () => {
  return (
    <Accordion
      type="single"
      className="rounded-3xl m-1"
      defaultValue="0"
    >
      {experiences.map((experience, index) => {
        const { title, date, description } = experience;
        return (
          <AccordionItem key={title} value={index.toString()} className="py-2 bg-off-white dark:bg-neutral-800 p-2 rounded-xl mb-1">
            <AccordionTrigger>{`${title} ${date}`}</AccordionTrigger>
            <AccordionContent className="h-52 overflow-y-auto md:h-96 ">
              <p>{description}</p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default ExperienceList;
