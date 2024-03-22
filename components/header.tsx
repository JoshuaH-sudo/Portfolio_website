"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";
import { useEffect, useState } from "react";
import { Config } from "tailwindcss";

export default function Header() {
  //Ignore the type error here as it does not know about the custom properties in the tailwind config
  const twConfig = resolveConfig<Config & any>(tailwindConfig);
  const colors = twConfig.theme.colors;
  const pathname = usePathname();
  const [headerColor, setHeaderColor] = useState(colors.primaryLight);

  const underlineClass =
    "bg-offBlack block h-0.5 transition-all duration-500 group-hover:max-w-full";

  useEffect(() => {
    switch (pathname) {
      case "/":
        setHeaderColor(colors.primaryLight);
        break;
      case "/about":
        setHeaderColor(colors.secondaryLight);
        break;
      case "/projects":
        setHeaderColor(colors.highlight1);
        break;
      default:
        setHeaderColor(colors.primaryLight);
        break;
    }
  }, [colors.highlight1, colors.primaryLight, colors.secondaryLight, pathname]);

  return (
    <header
      style={{
        //Need to set the color here as tailwind will not be able to resolve the color after state change
        backgroundColor: headerColor,
      }}
      className={`fixed top-0 h-14 w-full shadow-xl transition-colors duration-300 sm:h-20`}
    >
      <Link href="/">
        <h1 className="absolute -bottom-0 left-1 text-4xl font-extrabold italic text-offBlack sm:-bottom-0 sm:left-5 sm:text-7xl">
          JH
        </h1>
      </Link>
      <nav
        className={`
      flex h-full flex-row items-end justify-center pb-0.5 text-xs
      font-bold text-offWhite sm:text-lg
    `}
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
