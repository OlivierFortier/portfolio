import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiSend } from "react-icons/fi";

export default function Footer2() {
  return (
    <footer className="text-gray-600 body-font sm:max-w-lg mx-auto">
      <hr className="h-0.5 w-10/12 sm:w-full mx-auto bg-blue-600 my-2 sm:mb-4" />
      <nav className="container px-5 pb-8 mx-auto flex items-center sm:flex-row flex-col">
        <h4 className="text-md text-gray-500 sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4">
          <Link href="/"><a>© 2021 Olivier Fortier</a></Link>
        </h4>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="/">
              <a className="px-2 rounded-full bg-blue-400 h-10 w-10 flex justify-center items-center text-white">
                <FaLinkedinIn />
              </a>
          </Link>
          <Link href="/">
              <a className="px-2 rounded-full bg-blue-400 h-10 w-10 flex justify-center items-center shadow-md ml-3 text-white">
                <FiGithub />
              </a>
          </Link>
          <Link href="/">
              <a className="px-2 rounded-full bg-blue-400 h-10 w-10 flex justify-center items-center shadow-md ml-3 text-white">
                <FiSend />
              </a>
          </Link>
        </span>
      </nav>
    </footer>
  );
}
