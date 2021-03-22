import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiSend, FiMoon, FiSun } from "react-icons/fi";
import { Theme } from "../../pages/_app";

export default function Footer({ theme, setDarkTheme, setLightTheme, }: { theme: Theme; setDarkTheme: () => void; setLightTheme: () => void; }) {
  
  // simple fonction pour changer le thème de couleur de nuit à jour et vice-versa
  function changerTheme() {
    theme === "light" ? setDarkTheme() : setLightTheme();
  }
  
  return (
    <footer className="absolute bottom-0 left-0 right-0 z-10 text-gray-600 body-font sm:max-w-lg mx-auto pt-6">
      <hr className="z-10 h-0.5 w-10/12 sm:w-full mx-auto bg-blue-600 my-2 sm:mb-4" />
      <nav className="container px-5 pb-8 mx-auto flex items-center justify-evenly sm:flex-row flex-col">
        <h2 className="z-10 hover:text-blue-600 dark:hover:text-blue-500 transition-colors text-md text-blue-500 dark:text-blue-600  sm:py-2 sm:mt-0 mt-4">
          <Link href="/">
            <a aria-label="Retour à la page d'accueil">
              © 2021 Olivier Fortier
            </a>
          </Link>
        </h2>
        <button
          aria-label="changer de thème (jour/nuit)"
          onClick={changerTheme}
          className="text-2xl mt-2 transform transition-transform hover:scale-125  from-yellow-400 to-yellow-800 dark:from-blue-400 dark:to-blue-800 bg-gradient-to-br text-yellow-300 dark:text-blue-400 h-12 w-12 p-2 rounded-full  flex justify-center items-center"
        >
          {/* afficher une icone différente selon le thème */}
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </button>
        <span className="z-10 inline-flex  sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            aria-label="Connectez avec moi sur LinkedIn"
            href="https://www.linkedin.com/in/olivier-fortier/"
            className="hover:bg-blue-600 transition-colors px-2 rounded-full bg-blue-500 dark:bg-blue-900 dark:hover:bg-blue-500 h-10 w-10 flex justify-center items-center text-white dark:text-blue-400"
          >
            <FaLinkedinIn />
          </a>
          <a
            aria-label="Retrouvez tout mon code sur GitHub"
            href="https://github.com/OlivierFortier"
            className="hover:bg-blue-600 transition-colors px-2 rounded-full bg-blue-500 dark:bg-blue-900 dark:hover:bg-blue-500 h-10 w-10 flex justify-center items-center shadow-md ml-3 text-white dark:text-blue-400"
          >
            <FiGithub />
          </a>
          <a
            aria-label="Contactez moi par courriel"
            href="mailto:olivier_fortier@outlook.com"
            className="hover:bg-blue-600 transition-colors px-2 rounded-full bg-blue-500 dark:bg-blue-900 dark:hover:bg-blue-500 h-10 w-10 flex justify-center items-center shadow-md ml-3 text-white dark:text-blue-400"
          >
            <FiSend />
          </a>
        </span>
      </nav>
    </footer>
  );
}
