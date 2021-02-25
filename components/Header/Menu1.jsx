import Link from "next/link";
import { SiGravatar } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { FiSend } from 'react-icons/fi';
import { useState } from "react";

export default function Menu1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        aria-label="Open Menu"
        title="Open Menu"
        className="text-blue-600 p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-blue-50 focus:bg-blue-50"
        onClick={() => setIsMenuOpen(true)}
      >
        <IoMenu className="text-5xl" />
      </button>
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full">
          <div className="p-5 bg-white border rounded shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
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
              </div>
              <div>
                <button
                  aria-label="Fermer menu"
                  title="Fermer menu"
                  className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IoClose className="text-5xl" />
                </button>
              </div>
            </div>
            <nav>
              <ul className="text-2xl text-blue-500 space-y-4 text-right">
                <li>
                  <Link href="/">
                    <a
                      aria-label="Accueil"
                      title="Accueil"
                      className="font-medium tracking-wide transition-colors duration-200 hover:text-blue-400"
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
                      className="font-medium tracking-wide transition-colors duration-200 hover:text-blue-400"
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
                      className="font-medium tracking-wide transition-colors duration-200 hover:text-blue-400"
                    >
                      À propos
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                      aria-label="Contact"
                      title="Contact"
                    >
                      Contact <FiSend className="ml-4" />
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
