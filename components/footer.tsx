import Location from "./svgs/location";
import { useTheme } from "next-themes";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  return (
    <footer className="font-andale-mono flex w-full items-center justify-between py-1 pr-5 md:pl-20 transition-colors duration-300">
      <nav className="flex flex-row justify-end pr-2 pb-0.5 text-lg font-bold">
        <ul className="flex flex-row justify-center gap-5">
          <li>
            <span className="flex flex-row items-center gap-1">
              <Location
                width={17}
                height={21}
                fill={resolvedTheme === "dark" ? "#fff" : "#000"}
              />
              <p>Berlin</p>
            </span>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/joshua-hoban"
              target="_blank"
              rel="noopener noreferrer"
            >
              //LinkedIn
            </a>
          </li>
          <li>
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
        className="text-xl font-extrabold"
      >
        joshua_hoban@proton.me
      </a>
    </footer>
  );
}
