import Link from "next/link";
import { FiSend } from "react-icons/fi";
import MenuMobile from "./MenuMobile";
import MenuMobilePleinEcran from "./MenuMobilePleinEcran";
import Avatar from "./Avatar";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header className="z-50 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
      <nav className="relative flex items-center justify-between">
        <Link href="/">
          <a
            aria-label="Olivier"
            title="Olivier"
            className=" inline-flex items-center"
          >
            <span className="ml-2 text-4xl font-bold tracking-wide text-blue-500 uppercase">
              <Avatar />
            </span>
            {router.pathname !== "/" && (
              <h1 className="ml-4 text-xl text-blue-600 font-semibold">
                Olivier Fortier
              </h1>
            )}
          </a>
        </Link>
        <ul className="text-blue-400 items-center hidden space-x-8 lg:flex">
          <li>
            <Link href="/">
              <a
                aria-label="Accueil"
                title="Accueil"
                className={`${router.pathname == "/" && "underline"} font-medium tracking-wide transition-colors duration-200 hover:text-blue-800`}
              >
                Accueil
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projets">
              <a
                aria-label="Projets"
                title="Projets"
                className={`${router.pathname.includes("/projets") && "underline"} font-medium tracking-wide transition-colors duration-200 hover:text-blue-800`}
              >
                Projets
              </a>
            </Link>
          </li>
          <li>
            <Link href="/a-propos">
              <a
                aria-label="À propos"
                title="À propos"
                className={`${router.pathname == "/a-propos" && "underline"} font-medium tracking-wide transition-colors duration-200 hover:text-blue-800`}
              >
                À propos
              </a>
            </Link>
          </li>
          <li>
            <a
              href="mailto:olivier_fortier@outlook.com"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
              aria-label="Contact"
              title="Contact"
            >
              Contact
              <FiSend className="ml-4" />
            </a>
          </li>
        </ul>

        <MenuMobile />

        {/* <MenuMobilePleinEcran/> */}
      </nav>
    </header>
  );
}
