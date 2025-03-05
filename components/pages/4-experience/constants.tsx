import { Testimonial } from "@/components/ui/animated-testimonials";
import { Experience } from "./types";

export const experiences: Experience[] = [
  {
    title: "Visi/One",
    date: "2024 - Present",
    description: (
      <>
        At Visi/One, I lead the <strong>frontend development efforts</strong> 🚀,
        collaborating closely with my team to prototype and refine UI/UX designs
        using Figma. This iterative approach allows us to quickly identify and
        implement the most effective design solutions. <br />
        <br />
        Beyond design, I take a <strong>full-stack role</strong> 💻, developing
        both the frontend and backend components to bring these ideas to life. I
        also spearheaded the development of our <strong>mobile app</strong> 📱,
        enhancing our core product from initial design to deployment on the
        Google Play and Apple App Stores using React Native with Expo. <br />
        <br />A key aspect of my role is fostering a{" "}
        <strong>cooperative environment</strong> 🤝
        by constructively challenging ideas, helping the team refine solutions
        and achieve the best possible outcomes. My work is not just about
        writing code but about shaping products that meet both business and user
        needs while maintaining high development standards.
      </>
    ),
  },
  {
    title: "Smunch",
    date: "2023 - 2024",
    description: (
      <>
        I led the development of new <strong>UI interfaces</strong> 🖥️ and
        features, collaborating with product, customer satisfaction, and
        accounting teams. I translated product requirements into efficient code
        and guided colleagues on <strong>CSS techniques</strong> 🎨. <br />
        <br />I ensured continuous deployment by creating adaptable code. Key
        achievements include implementing a sorting system based on user order
        history and a weekly overview for current orders. <br />
        <br />I modernized an application with legacy code, surpassing deadlines
        and resolving major bugs in customer onboarding. My extensive CSS
        knowledge was crucial in troubleshooting and sharing with the team. My
        commitment to <strong>front-end development</strong> is shown through
        high-quality solutions and project success.
      </>
    ),
  },
  {
    title: "Countersight",
    date: "2020 - 2023",
    description: (
      <>
        At Countersight, I <strong>research</strong> 🔍, design, and implement
        software solutions from scratch, ensuring maintainability for future
        development. I lead two major projects, focusing on{" "}
        <strong>front-end development</strong> with a rich UI library and
        designing both front and back ends to provide a solid foundation for my
        colleagues.
        <br />
        <br />
        Additionally, I offer <strong>technical direction</strong> 🧭, advise
        colleagues, assist in problem-solving, and conduct code reviews to
        maintain best practices.
      </>
    ),
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "He is an exceptional software engineer with a deep understanding of software development principles and never shies away from a challenge...",
    name: "Moataz Gouda",
    designation: "Product Manager",
    src: "/images/testimonials/moataz-gouda.jpg",
  },
  {
    quote:
      "Joshua has been a highly motivated, responsible and thoughtful team member...",
    name: "David Gavin",
    designation: "Senior Software Engineer",
    src: "/images/testimonials/david-gavin.jpg",
  },
  {
    quote:
      "Josh is a committed, consistently professional and highly skilful front-end developer and has been a great asset to the team...",
    name: "Nick Mazitelli",
    designation: "Managing Director",
    src: "/images/testimonials/nick-mazitelli.jpg",
  },
];
