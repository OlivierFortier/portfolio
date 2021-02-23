import { useState } from "react";
import Link from "next/link";
import { SiGravatar } from "react-icons/si";
import { IoMenu } from "react-icons/io5";
import Menu1 from "./Menu1";

export default function Header1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
      <nav className="relative flex items-center justify-between">
        <Link href="/">
          <a
            aria-label="Olivier"
            title="Olivier"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-4xl font-bold tracking-wide text-gray-800 uppercase">
              <SiGravatar />
            </span>
          </a>
        </Link>
        <ul className=" items-center hidden space-x-8 lg:flex">
          <li>
            <Link href="/">
              <a
                aria-label="Accueil"
                title="Accueil"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Accueil
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                aria-label="Projets"
                title="Projets"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Projets
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                aria-label="À propos"
                title="À propos"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                À propos
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Contact"
                title="Contact"
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>

       <Menu1/>
       
      </nav>
    </header>
  );
}
