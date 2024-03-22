"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const underlineClass =
    "bg-offBlack block h-0.5 transition-all duration-500 group-hover:max-w-full";

  return (
    <header className="relative h-14 sm:h-20">
      <Link href="/">
        <h1 className="absolute -bottom-2 left-1 text-4xl font-extrabold italic text-offBlack sm:-bottom-3 sm:left-5 sm:text-7xl">
          JH
        </h1>
      </Link>
      <nav
        className="
      flex h-full flex-row items-end justify-center bg-primaryLight
      pb-0.5 text-xs font-bold text-offWhite sm:text-lg
    "
      >
        <ul className="flex flex-row justify-center gap-5 text-offBlack">
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
