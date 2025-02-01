"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollision";
import React from "react";

const ProjectsPage = () => {
  return (
    <div id="projects" className="relative z-10 h-screen">
      <div className="z-1 flex h-full flex-row items-start justify-center">
        <h1>Projects</h1>
      </div>
      <BackgroundBeamsWithCollision />
    </div>
  );
};

export default ProjectsPage;
