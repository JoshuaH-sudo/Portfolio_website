import { ReactNode } from "react";

export interface Testimonial {
  name: string;
  role: string;
  testimonial: ReactNode;
}

export interface Experience {
  title: string;
  date: string;
  description: string | React.ReactNode;
  testimonials: Testimonial[];
  socials?: Partial<{
    website: string;
    linkedin: string;
    github: string;
    twitter: string;
  }>;
}
