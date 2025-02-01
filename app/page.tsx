import { TracingBeam } from "@/components/ui/TracingBeam";
import { Metadata } from "next";
import { HomePage } from "@/components/pages/home/HomePage";
import ExpertisePage from "@/components/pages/Expertise/ExpertisePage";

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
        <div
          id="projects"
          className="flex h-screen flex-col items-center justify-center"
        >
          <h1>Projects</h1>
        </div>
        <div
          id="experience"
          className="flex h-screen flex-col items-center justify-center"
        >
          <h1>Experience</h1>
        </div>
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
