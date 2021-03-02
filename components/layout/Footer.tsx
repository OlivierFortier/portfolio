import Link from "next/link";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiSend, FiMoon, FiSun } from "react-icons/fi";

export default function Footer({theme, setDarkTheme, setLightTheme}) {
  

  return (
    <footer className="text-gray-600 body-font sm:max-w-lg mx-auto pt-6">
      <hr className="h-0.5 w-10/12 sm:w-full mx-auto bg-blue-600 my-2 sm:mb-4" />
      <nav className="container px-5 pb-8 mx-auto flex items-center justify-evenly sm:flex-row flex-col">
        <h4 className="hover:text-blue-600 transition-colors text-md text-blue-500  sm:py-2 sm:mt-0 mt-4">
          <Link href="/">
            <a>© 2021 Olivier Fortier</a>
          </Link>
        </h4>

        <button
          onClick={() => {
            theme === "dark" ? setLightTheme() : setDarkTheme();
          }}
          className="text-2xl bg-blue-200 text-blue-700 h-12 w-12 p-2 rounded-full mx-auto flex justify-center items-center"
        >
          {theme === "dark" && <FiMoon />}
          {theme === "light" && <FiSun />}
        </button>

        <span className="inline-flex  sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://www.linkedin.com/in/olivier-fortier/"
            className="hover:bg-blue-600 transition-colors px-2 rounded-full bg-blue-500 h-10 w-10 flex justify-center items-center text-white"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/OlivierFortier"
            className="hover:bg-blue-600 transition-colors px-2 rounded-full bg-blue-500 h-10 w-10 flex justify-center items-center shadow-md ml-3 text-white"
          >
            <FiGithub />
          </a>

          <a
            href="mailto:olivier_fortier@outlook.com"
            className="hover:bg-blue-600 transition-colors px-2 rounded-full bg-blue-500 h-10 w-10 flex justify-center items-center shadow-md ml-3 text-white"
          >
            <FiSend />
          </a>
        </span>
      </nav>
    </footer>
  );
}
