"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="font-andale-mono fixed top-0 z-10 flex w-full items-center justify-between px-5 py-1 transition-colors duration-300">
      <Link href="#home">
        <p className="text-off-black font-monomaniac-one text-xl font-extrabold">
          Joshua Hoban
        </p>
      </Link>

      <nav className="flex flex-row justify-end pr-2 pb-0.5 text-lg font-bold">
        <ul className="text-off-black flex flex-row justify-center gap-5">
          <li className="group transition duration-300">
            <Link href="#home">//Home</Link>
          </li>
          <li className="group transition duration-300">
            <Link href="#skills">//Skills</Link>
          </li>
          <li className="group transition duration-300">
            <Link href="#projects">//Projects</Link>
          </li>
          <li className="group transition duration-300">
            <Link href="#experience">//Experience</Link>
          </li>
          <li className="group transition duration-300">
            <Link href="#contact">//Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
