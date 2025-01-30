import { EverVault } from "@/components/ui/EverVault";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Joshua Hoban",
  description:
    "Fullstack web developer based in Berlin, Germany. Aussie software developer excelling in Frontend design and client satisfaction.",
};

export default function Home() {
  return (
    <main>
      <div
        id="home"
        className="flex h-screen flex-col items-center justify-center"
      >
        <EverVault>
          <div className="relative flex h-screen flex-col items-center justify-center">
            <h1>Joshua Hoban</h1>
            <h2>Front-end Specialized Full-stack Freelance Developer.</h2>
            <Image
              src="/images/profile.png"
              width={322}
              height={322}
              alt="profile photo"
            />
          </div>
        </EverVault>
      </div>
      <div
        id="skills"
        className="flex h-screen flex-col items-center justify-center"
      >
        <h1>Skills</h1>
      </div>
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
    </main>
  );
}
