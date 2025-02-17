import ContactPage from "@/components/pages/contact/contact-page";
import ExperiencePage from "@/components/pages/experience/experience-page";
import ExpertisePage from "@/components/pages/expertise/expertise-page";
import { HomePage } from "@/components/pages/home/home-page";
import ProjectsPage from "@/components/pages/projects/projects-page";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <main>
      <TracingBeam>
        <HomePage />
        <ExpertisePage />
        <ProjectsPage />
        {/* <ExperiencePage /> */}
        {/* <ContactPage /> */}
      </TracingBeam>
    </main>
  );
}
