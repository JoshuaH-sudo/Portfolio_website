import Image from "next/image";
import Link from "next/link";

export const projectItems = [
  {
    title: (
      <Link href="https://apsj.com.au/index.php/journal" target="_blank">
        <span className="text-blue-500 underline dark:text-blue-300">
          The Australian Pharmacy Students Journal (APSJ)
        </span>{" "}
        💊
      </Link>
    ),
    description:
      "It is the only peer-reviewed pharmacy student journal in the world, providing pharmacy students around the world with the opportunity to develop research skills and publish their work.",
    header: (
      <Image
        src="/images/projects/apsj.png"
        alt="The Australian Pharmacy Students"
        width={600}
        height={300}
      />
    ),
  },
  {
    title: (
      <Link
        href="https://github.com/JoshuaH-sudo/dating_profile_website"
        target="_blank"
      >
        <span className="text-blue-500 underline dark:text-blue-300">
          Dating Profile Website
        </span>{" "}
        💑
      </Link>
    ),
    description:
      "A website to show off in my tinder bio, including a survey to see how compatible we are. 🥴",
    header: (
      <Image
        src="/images/projects/dating-website.png"
        alt="Dating Profile Website"
        width={400}
        height={300}
      />
    ),
  },
  {
    title: (
      <Link
        href="https://github.com/JoshuaH-sudo/dev-academy-2023-exercise"
        target="_blank"
      >
        <span className="text-blue-500 underline dark:text-blue-300">
          HSL Transport App
        </span>{" "}
        🚲
      </Link>
    ),
    description:
      "An exercise for Solita Dev Academy, fullstack application with a React frontend and a Node.js backend running on AWS ECS.",
    header: (
      <Image
        src="/images/projects/hsl-transport-app.png"
        alt="HSL Transport App"
        width={400}
        height={300}
      />
    ),
  },
  {
    title: (
      <Link
        href="https://github.com/JoshuaH-sudo/Portfolio_website"
        target="_blank"
      >
        <span className="text-blue-500 underline dark:text-blue-300">
          This website... wow!
        </span>{" "}
        🤯
      </Link>
    ),
    description:
      "Wanna see how I made the website your on right now? Check out the repo!",
    header: (
      <Image
        src="/images/projects/website.png"
        alt="This website"
        width={600}
        height={300}
      />
    ),
  },
];
