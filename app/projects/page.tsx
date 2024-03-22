import { Metadata } from "next";
import { Suspense } from "react";
import ProjectGrid from "./projectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description: "A list of my GitHub projects",
};

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 bg-offBlack p-24">
      <h1 className="text-6xl font-bold text-offWhite">Projects</h1>
      <Suspense
        fallback={
          <p className="text-center text-highlight2">Fetching Projects...</p>
        }
      >
        <ProjectGrid />
      </Suspense>
    </main>
  );
}
