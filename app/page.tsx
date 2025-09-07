"use client";
import ContactPage from "@/components/pages/5-contact/contact-page";
import ExperiencePage from "@/components/pages/4-experience/experience-page";
import ExpertisePage from "@/components/pages/2-expertise/expertise-page";
import { HomePage } from "@/components/pages/1-home/home-page";
import ProjectsPage from "@/components/pages/3-projects/projects-page";

export default function Home() {
  const pageComponents = (
    <>
      <HomePage />
      <ExpertisePage />
      <ProjectsPage />
      <ExperiencePage />
      <ContactPage />
    </>
  );

  return pageComponents;
}
