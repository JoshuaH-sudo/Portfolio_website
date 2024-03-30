import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Joshua Hoban",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-between bg-offBlack p-10 sm:p-24">
      <div className="flex max-w-2xl flex-col gap-5 text-offWhite">
        <h1 className="text-2xl font-bold text-offWhite sm:text-5xl">
          Welcome to my corner of the web! I&apos;m{" "}
          <span className="text-primaryLight">Joshua</span>{" "}
          <span className="text-secondaryLight">Hoban</span>
        </h1>
        <p>
          I am a 26-year-old full stack web developer hailing from the vibrant
          city of Canberra, Australia. With a passion for crafting seamless
          digital experiences, I specialize in{" "}
          <span className="text-highlight2">front-end development</span> while
          embracing the challenges of back-end intricacies.
        </p>
        <p>
          My journey into the world of web development has been characterized by
          a continuous drive for growth and innovation. One aspect that sets me
          apart is my unwavering commitment to enhancing team collaboration.
          Despite my initial <span className="text-highlight1">shyness</span>{" "}
          and <span className="text-accentLight">comfort zone tendencies</span>,
          I&apos;ve learned to harness the power of stepping outside these
          boundaries, inspiring my colleagues to do the same. By fostering an
          environment of open communication and mutual support, I believe we can
          achieve extraordinary results together.
        </p>
        <p>
          Beyond coding, I find solace in creative pursuits like painting and
          drawing. This{" "}
          <span className="text-accent">artistic inclination</span> not only
          enriches my front-end work but also fuels my penchant for
          out-of-the-box thinking. Every brushstroke and line drawn contributes
          to my ability to design visually captivating interfaces that resonate
          with users on a deeper level.
        </p>
        <p>
          Driven by a{" "}
          <span className="text-primaryDark">thirst for adventure</span> and a
          hunger for knowledge, I embarked on a journey to Europe to expand my
          skill set and broaden my horizons. Immersing myself in diverse
          cultures and perspectives has not only enriched my personal growth but
          has also infused my work with a global perspective.
        </p>
        <p>
          Whether you&apos;re here to explore my{" "}
          <span className="text-primary">portfolio</span>, collaborate on an
          exciting project, or simply connect over shared interests, I invite
          you to join me on this exhilarating journey of{" "}
          <span className="text-highlight2">creativity</span>,{" "}
          <span className="text-highlight2">innovation</span>, and continuous
          learning. Together, let&apos;s push the boundaries of what&apos;s
          possible in the digital realm and create experiences that leave a
          lasting impact.
        </p>
      </div>
    </main>
  );
}
