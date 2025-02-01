import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="font-andale-mono bg-off-white fixed bottom-0 z-100 flex w-full items-center justify-between py-1 pr-5 pl-20 transition-colors duration-300">
      <nav className="flex flex-row justify-end pr-2 pb-0.5 text-lg font-bold">
        <ul className="text-off-black flex flex-row justify-center gap-5">
          <li>
            <span className="flex flex-row items-center gap-1">
              <Image
                src="/images/icons/location.svg"
                alt="location"
                width={17}
                height={21}
              />
              <p>Berlin</p>
            </span>
          </li>
          <li className="group transition duration-300">
            <Link href="https://www.linkedin.com/in/joshua-hoban">
              <p>//LinkedIn</p>
            </Link>
          </li>
          <li className="group transition duration-300">
            <Link href="https://github.com/JoshuaH-sudo">
              <p>//GitHub</p>
            </Link>
          </li>
        </ul>
      </nav>

      <a
        href="mailto:joshua_hoban@proton.me"
        className="text-off-black text-xl font-extrabold"
      >
        joshua_hoban@proton.me
      </a>
    </footer>
  );
}
