import ContactPage from "@/components/pages/contact/contact-page";
import ExperiencePage from "@/components/pages/experience/experience-page";
import ExpertisePage from "@/components/pages/expertise/expertise-page";
import { HomePage } from "@/components/pages/home/home-page";
import ProjectsPage from "@/components/pages/projects/projects-page";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joshua Hoban",
  description:
    "Aussie freelance Fullstack web developer based in Berlin, Germany.",
  openGraph: {
    images: [
      {
        url: "https://joshua-hoban.com/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Joshua Hoban",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <TracingBeam>
        <HomePage />
        <ExpertisePage />
        <ProjectsPage />
        <ExperiencePage />
        <ContactPage />
      </TracingBeam>
    </main>
  );
}
