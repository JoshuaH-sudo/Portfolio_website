import Location from "./svgs/location";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by using fallback color until mounted
  const iconColor = mounted ? (resolvedTheme === "dark" ? "#fff" : "#000") : "#000";
  return (
    <footer className="font-andale-mono absolute bottom-0 left-0 z-[100] flex w-full items-center justify-between py-1 pr-5 transition-colors duration-300 md:pl-20">
      <nav className="flex flex-row justify-end pr-2 pb-0.5 text-base font-bold md:text-lg">
        <ul className="flex flex-row justify-center gap-5">
          <li>
            <span className="flex flex-row items-center gap-1">
              <Location
                width={17}
                height={21}
                fill={iconColor}
              />
              <p>Berlin</p>
            </span>
          </li>
          <li className="expand hidden md:block">
            <a
              href="https://www.linkedin.com/in/joshua-hoban"
              target="_blank"
              rel="noopener noreferrer"
            >
              //LinkedIn
            </a>
          </li>
          <li className="expand hidden md:block">
            <a
              href="https://github.com/JoshuaH-sudo"
              target="_blank"
              rel="noopener noreferrer"
            >
              //GitHub
            </a>
          </li>
        </ul>
      </nav>

      <a
        href="mailto:joshua_hoban@proton.me"
        className="expand hidden text-xl font-extrabold md:block"
      >
        joshua_hoban@proton.me
      </a>
    </footer>
  );
}
