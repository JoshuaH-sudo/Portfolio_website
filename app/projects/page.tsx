import { Metadata } from "next";
import { Suspense } from "react";
import ProjectGrid from "./projectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description: "A list of my GitHub projects",
};

// Revalidate every hour
export const revalidate = 3600 

export default function ProjectsPage() {
  return (
    <main className="flex flex-col gap-5 bg-off-black p-10 sm:p-24">
      <h1 className="text-3xl sm:text-6xl font-bold text-off-white">Projects</h1>
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
