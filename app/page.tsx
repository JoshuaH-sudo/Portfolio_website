import ContactPage from "@/components/pages/5-contact/contact-page";
import ExperiencePage from "@/components/pages/4-experience/experience-page";
import ExpertisePage from "@/components/pages/2-expertise/expertise-page";
import { HomePage } from "@/components/pages/1-home/home-page";
import ProjectsPage from "@/components/pages/3-projects/projects-page";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <TracingBeam>
      <HomePage />
      <ExpertisePage />
      <ProjectsPage />
      <ExperiencePage />
      <ContactPage />
    </TracingBeam>
  );
}
