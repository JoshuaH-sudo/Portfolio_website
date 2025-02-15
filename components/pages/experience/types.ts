import { ReactNode } from "react";
export interface Experience {
  title: string;
  date: string;
  description: string | React.ReactNode;
  socials?: Partial<{
    website: string;
    linkedin: string;
    github: string;
    twitter: string;
  }>;
}
