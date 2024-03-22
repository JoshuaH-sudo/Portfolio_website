import { Metadata } from "next";
import { Suspense } from "react";
import ProjectGrid from "./projectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description: "A list of my GitHub projects",
};

// Revalidate every week
export const revalidate = 60 * 60 * 24 * 7;

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col gap-5 bg-offBlack p-24">
      <h1 className="text-6xl font-bold text-offWhite">Projects</h1>
      <Suspense
        fallback={
          <h2 className="animate-fade-in-out text-center text-4xl font-bold text-highlight2 ">
            Fetching Projects...
          </h2>
        }
      >
        <ProjectGrid />
      </Suspense>
    </main>
  );
}
