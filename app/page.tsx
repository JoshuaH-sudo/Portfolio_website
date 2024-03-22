import Image from "next/image";

export default function Home() {
  return (
    <main className="text-offWhite bg-offBlack flex h-screen flex-col items-center justify-between gap-10 p-24">
      <div className="flex flex-row gap-5">
        <Image
          src="/images/image_8.jpg"
          alt="Joshua Hoban"
          width={200}
          height={200}
          className="rounded-3xl"
        />
        <section className="flex flex-col gap-1 max-w-3xl">
          <h4 className="text-sm font-bold text-accent">{`G'day my name is,`}</h4>
          <h1 className="text-8xl font-bold text-primary">Joshua <span className="text-primaryDark">Hoban</span></h1>
          <h2 className="text-4xl font-bold text-highlight1">
            Experienced Full-Stack Web Developer
          </h2>
          <p className="text-highlight2 max-w-xl">
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
