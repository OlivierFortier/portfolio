import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function Menu() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  function basculerMenu() {
      setMenuOuvert(etatMenu => !etatMenu);
  }

  useEffect(() => {
    menuOuvert && ( document.body.style.overflowY = "hidden");
    !menuOuvert && (document.body.style.overflowY = "scroll");
   }, [menuOuvert]);

  return (
    <details id="Menu" className="list-none lg:hidden">
      <summary
        onClick={basculerMenu}
        className="relative z-30 list-none text-7xl"
      >
        <IoMenu />
      </summary>
      <ul className="z-20 fixed top-0 left-0 flex flex-col h-screen w-screen bg-blue-300 justify-center items-center space-y-7 text-4xl">
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
    </details>
  );
}
