import EmailIcon from "@/components/icons/email";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-br from-slate-300 to-slate-600 text-white
     "
    >
      <div className="flex flex-row gap-5">
        <Image
          src="/images/profile.jpg"
          alt="Joshua Hoban"
          width={200}
          height={200}
          className=" rounded-3xl"
        />
        <section className="flex flex-col gap-1">
          <h4 className="text-sm font-bold">{`G'day my name is,`}</h4>
          <h1 className="text-8xl font-bold">Joshua Hoban</h1>
          <h2 className="text-4xl font-bold">
            Experienced Full-Stack Web Developer
          </h2>
          <p>
            Aussie software developer based in Berlin, excelling in Frontend
            design and client satisfaction, while fostering lively work
            environments and expediting projects through efficient prototyping
            and collaboration.
          </p>
        </section>
      </div>

      <div className="flex flex-row w-full justify-between items-start">
        <section className="flex flex-col gap-1">
          <h4 className="text-sm font-bold">Location: Berlin, Germany</h4>
          <h4 className="text-sm font-bold">{`Visa: (German) EU Blue Card`}</h4>
        </section>
        {/* Social links LinkedIn, Github and email */}
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