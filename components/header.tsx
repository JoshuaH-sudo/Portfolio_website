"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();

  //Ignore the type error here as it does not know about the custom properties in the tailwind config
  const [headerColor, setHeaderColor] = useState("--color-primary-light");

  useEffect(() => {
    switch (pathname) {
      case "/":
        setHeaderColor("--color-primary-light");
        break;
      case "/about":
        setHeaderColor("--color-secondary-light");
        break;
      case "/projects":
        setHeaderColor("--color-highlight2");
        break;
      default:
        setHeaderColor("--color-primary-light");
        break;
    }
  }, [pathname]);

  return (
    <header className="font-andale-mono fixed top-0 z-10 flex w-full items-center justify-between px-5 py-1 transition-colors duration-300">
      <Link href="/">
        <p className="text-off-black font-monomaniac-one text-xl font-extrabold">
          Joshua Hoban
        </p>
      </Link>

      <nav className="flex flex-row justify-end pr-2 pb-0.5 text-lg font-bold">
        <ul className="text-off-black flex flex-row justify-center gap-5">
          <li className="group transition duration-300">
            <Link href="/">//Home</Link>
          </li>
          <li className="group transition duration-300">
            <Link href="/about">//Skills</Link>
          </li>
          <li className="group transition duration-300">
            <Link href="/projects">//Projects</Link>
          </li>
          <li className="group transition duration-300">
            <Link href="/experience">//Experience</Link>
          </li>
          <li className="group transition duration-300">
            <Link href="/contact">//Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
