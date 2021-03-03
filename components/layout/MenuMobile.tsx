import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import {useRouter} from 'next/router';
import Avatar from "./Avatar";
import { useTransition, animated } from "react-spring";

export default function MenuMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // animation de transition du menu
  const transitions = useTransition(isMenuOpen , null, {
    from: {transform: "scale(0)", opacity: 0},
    enter : {transform: "scale(1)", opacity: 1},
    leave : {transform: "scale(0)", opacity: 0}
  })

  return (
    <div className="lg:hidden">
      <button
        aria-label="Open Menu"
        title="Open Menu"
        className="text-blue-500 p-2 -mr-1 transition-all duration-200 rounded focus:outline-none focus:shadow-outline transform hover:scale-125 focus:ring-1"
        onClick={() => setIsMenuOpen(true)}
      >
        <IoMenu className="text-6xl" />
      </button>

      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="origin-top-right z-50 absolute top-0 left-0 w-full"
            >
              <div className="p-5 bg-white dark:bg-blue-900 dark:border-gray-900 border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link href="/">
                      <a
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Olivier"
                        title="Olivier"
                        className="inline-flex items-center"
                      >
                        <span className="ml-2 text-4xl font-bold tracking-wide text-blue-500 uppercase">
                          <Avatar />
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Fermer menu"
                      title="Fermer menu"
                      className="text-blue-500 p-2 -mt-2 -mr-2 transition-all transform duration-200 rounded hover:rotate-90 focus:ring-1 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <IoClose className="text-6xl" />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="text-2xl text-blue-500 space-y-4 text-right">
                    <li>
                      <Link href="/">
                        <a
                          onClick={() => setIsMenuOpen(false)}
                          aria-label="Accueil"
                          title="Accueil"
                          className={`${
                            router.pathname == "/" && "underline"
                          } font-medium tracking-wide transition-colors duration-200 hover:text-blue-400`}
                        >
                          Accueil
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/projets">
                        <a
                          onClick={() => setIsMenuOpen(false)}
                          aria-label="Projets"
                          title="Projets"
                          className={`${
                            router.pathname.includes("/projets") && "underline"
                          } font-medium tracking-wide transition-colors duration-200 hover:text-blue-400`}
                        >
                          Projets
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/a-propos">
                        <a
                          onClick={() => setIsMenuOpen(false)}
                          aria-label="À propos"
                          title="À propos"
                          className={`${
                            router.pathname == "/a-propos" && "underline"
                          } font-medium tracking-wide transition-colors duration-200 hover:text-blue-400`}
                        >
                          À propos
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a
                        onClick={() => setIsMenuOpen(false)}
                        href="https://www.linkedin.com/in/olivier-fortier/"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                        aria-label="Contact"
                        title="Contact"
                      >
                        Contact <FiSend className="ml-4" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </animated.div>
          )
      )}
    </div>
  );
}
