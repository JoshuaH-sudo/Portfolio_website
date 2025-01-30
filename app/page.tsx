import { EvervaultCard } from "@/components/ui/evervault-card";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Joshua Hoban",
  description:
    "Fullstack web developer based in Berlin, Germany. Aussie software developer excelling in Frontend design and client satisfaction.",
};

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <EvervaultCard>
        <div className="flex h-screen flex-col items-center justify-center">
          <h1>Joshua Hoban</h1>
          <h2>Front-end Specialized Full-stack Developer.</h2>
          <Image
            src="/images/profile.png"
            width={322}
            height={322}
            alt="profile photo"
          />
        </div>
      </EvervaultCard>
    </main>
  );
}
