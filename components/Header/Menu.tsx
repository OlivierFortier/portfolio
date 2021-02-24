import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function Menu() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  function basculerMenu() {
      setMenuOuvert(etatMenu => !etatMenu);
  }

  useEffect(() => {
    menuOuvert && ( document.body.style.overflow = "hidden");
    !menuOuvert && (document.body.style.overflow = "scroll");
   }, [menuOuvert]);

  return (
    <details id="Menu" className="list-none lg:hidden">
      <summary
        onClick={basculerMenu}
        className="relative z-30 list-none text-7xl"
      >
        <IoMenu />
      </summary>
      <div className="z-20 fixed top-0 left-0 h-screen w-screen bg-blue-300">
        <ul className="h-full flex flex-col justify-center items-center space-y-7 text-4xl">
          <li>
            <Link href="/">
              <a>Accueil</a>
            </Link>
          </li>
          <li>
            <Link href="/">
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
  );
}
