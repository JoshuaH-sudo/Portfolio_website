import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Joshua Hoban",
  description:
    "Fullstack web developer based in Berlin, Germany. Aussie software developer excelling in Frontend design and client satisfaction.",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-10 bg-off-black p-12 text-off-white sm:p-24">
      <div className="flex flex-col-reverse items-center gap-5 sm:flex-row">
        <Image
          src="/images/image_8.jpg"
          alt="Joshua Hoban"
          width={200}
          height={200}
          className="w-full rounded-3xl object-cover sm:h-[200px] sm:w-[200px]"
        />
        <section className="flex max-w-3xl flex-col gap-1">
          <h4 className="text-md font-bold text-accent sm:text-sm">
            G&apos;day my name is,
          </h4>
          <h1 className="text-4xl font-bold text-primary sm:text-8xl">
            Joshua <span className="text-primary-dark">Hoban</span>
          </h1>
          <h2 className="text-2xl font-bold text-highlight1 sm:text-2xl">
            Experienced Full-Stack Web Developer
          </h2>
          <p className="max-w-xl text-xs text-highlight2 sm:text-lg">
            Aussie software developer based in Berlin, excelling in Frontend
            design and client satisfaction, while fostering lively work
            environments and expediting projects through efficient prototyping
            and collaboration.
          </p>
        </section>
      </div>

      <div className="flex w-full flex-row justify-end">
        <div className="flex flex-row gap-2">
          <a
            href="https://linkedin.com/in/joshua-hoban"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/in-white.png"
              alt="LinkedIn Link"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://github.com/JoshuaH-sudo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/github-mark-white.png"
              alt="GitHub Link"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </main>
  );
}
