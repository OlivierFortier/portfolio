import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

export default function MenuMobilePleinEcran() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  function basculerMenu() {
    setMenuOuvert((etatMenu) => !etatMenu);
  }

  useEffect(() => {
    menuOuvert && (document.body.style.overflow = "hidden");
    !menuOuvert && (document.body.style.overflow = "auto");
  }, [menuOuvert]);

  return (
    <>
      <details id="Menu" className="list-none lg:hidden">
        <summary
          onClick={basculerMenu}
          className="relative z-30 list-none text-6xl text-blue-500"
        >
          {!menuOuvert ? <IoMenu /> : <IoClose />}
        </summary>
        <div className=" z-20 fixed top-0 left-0 h-full w-full bg-opacity-90 bg-blue-300">
          <ul className="text-blue-600 h-full flex flex-col justify-around py-52 items-center space-y-7 text-5xl">
            <li>
              <Link href="/">
                <a>Accueil</a>
              </Link>
            </li>
            <li>
              <Link href="/projets">
                <a>Projets</a>
              </Link>
            </li>
            <li>
              <Link href="/a-propos">
                <a>À propos</a>
              </Link>
            </li>
            <li>
              <a
                href="mailto:olivier_fortier@outlook.com"
                className="inline-flex items-center justify-center w-full h-12 px-6 py-8 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
              >
                Contact <FiSend className="ml-4" />
              </a>
            </li>
          </ul>
        </div>
      </details>
      {/* <style jsx>{`
        #Menu > summary {
          list-style: none;
        }

        #Menu > summary::-webkit-details-marker {
          display: none;
        }
      `}</style> */}
    </>
  );
}
