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
    <header
      style={{
        backgroundColor: `var(${headerColor})`,
      }}
      className="fixed z-10 top-0 h-14 w-full shadow-xl transition-colors duration-300 sm:h-20"
    >
      <Link href="/">
        <h1 className="absolute -bottom-0 left-1 text-4xl font-extrabold italic text-offBlack sm:-bottom-0 sm:left-5 sm:text-7xl">
          JH
        </h1>
      </Link>

      <nav className="flex h-full flex-row items-end justify-center pb-0.5 text-xs font-bold text-offWhite sm:text-lg">
        <ul className="flex flex-row justify-center gap-5 text-offBlack">
          <li className="group transition duration-300">
            <Link href="/">Home</Link>
            <Underline pathname={pathname} targetPathname="/" />
          </li>
          <li className="group transition duration-300">
            <Link href="/about">About</Link>
            <Underline pathname={pathname} targetPathname="/about" />
          </li>
          <li className="group transition duration-300">
            <Link href="/projects">Projects</Link>
            <Underline pathname={pathname} targetPathname="/projects" />
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

const underlineClass =
  "bg-offBlack block h-0.5 transition-all duration-500 group-hover:max-w-full";

const Underline: FC<{ pathname: string; targetPathname: string }> = ({
  pathname,
  targetPathname,
}) => (
  <span
    className={`${underlineClass} ${pathname === targetPathname ? "max-w-full" : "max-w-0"}`}
  ></span>
);
