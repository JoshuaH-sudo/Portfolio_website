import ExperiencePage from "@/components/pages/experience/experience-page";
import ExpertisePage from "@/components/pages/expertise/expertise-page";
import { HomePage } from "@/components/pages/home/home-page";
import ProjectsPage from "@/components/pages/projects/projects-page";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joshua Hoban",
  description:
    "Fullstack web developer based in Berlin, Germany. Aussie software developer excelling in Frontend design and client satisfaction.",
};

export default function Home() {
  return (
    <main>
      <TracingBeam>
        <HomePage />
        <ExpertisePage />
        <ProjectsPage />
        <ExperiencePage />
        <div
          id="contact"
          className="flex h-screen flex-col items-center justify-center"
        >
          <h1>Contact</h1>
        </div>
      </TracingBeam>
    </main>
  );
}
