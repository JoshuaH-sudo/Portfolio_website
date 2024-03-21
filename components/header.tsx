"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const underlineClass =
    "bg-offBlack block h-0.5 transition-all duration-500 group-hover:max-w-full";

  return (
    <header className="relative h-20">
      <Link href="/">
        <h1 className="text-offBlack absolute -bottom-3 left-5 text-7xl font-extrabold italic">
          JH
        </h1>
      </Link>
      <nav
        className="
      text-offWhite flex h-full flex-row items-end justify-center
      bg-primaryLight pb-0.5 text-lg font-bold
    "
      >
        <ul className="text-offBlack flex flex-row justify-center gap-5">
          <li className="group transition duration-300">
            <Link href="/">Home</Link>
            <span
              className={`${underlineClass} ${pathname === "/" ? "max-w-full" : "max-w-0"}`}
            ></span>
          </li>
          <li className="group transition duration-300">
            <Link href="/about">About</Link>
            <span
              className={`${underlineClass} ${pathname === "/about" ? "max-w-full" : "max-w-0"}`}
            ></span>
          </li>
          <li className="group transition duration-300">
            <Link href="/projects">Projects</Link>
            <span
              className={`${underlineClass} ${pathname === "/projects" ? "max-w-full" : "max-w-0"}`}
            ></span>
          </li>
          <li className="group transition duration-300">
            <a href="/resume.pdf" target="_blank">
              Resume
            </a>
            <span className={`${underlineClass} max-w-0`}></span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
