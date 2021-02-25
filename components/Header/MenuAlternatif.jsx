import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function MenuAlternatif() {
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
          className="relative z-30 list-none text-7xl"
        >
          <IoMenu />
        </summary>
        <div className=" z-20 fixed top-0 left-0 h-full w-full bg-opacity-90 bg-blue-300" >
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
              <Link href="/">
                <a>À propos</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contact</a>
              </Link>
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
