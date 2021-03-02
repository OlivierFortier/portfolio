import Link from "next/link";
import GrilleSvgGauche from "./GrilleSvgGauche";
import { FaVuejs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextDotJs, SiDotNet, SiGraphql } from "react-icons/si";

export default function AppercuTechnos() {
  const icones = [
    [<FaReact />, "React"],
    [<FaVuejs />, "Vue"],
    [<SiNextDotJs />, "Next.js"],
    [<FaNodeJs />, "Node"],
    [<SiDotNet />, ".Net"],
    [<SiGraphql />, "GraphQl"],
  ];

  return (
    <section className="px-4 py-8 sm:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:pb-8">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-600 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <GrilleSvgGauche />
            <span className="relative">Mes</span>
          </span>{" "}
          technos pref
        </h1>
        <p className="text-base text-blue-500 md:text-lg">
          J'utilise ces technologies chaque fois que j'en ai l'occasion
        </p>
      </div>

      <ul className="text-blue-600 grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
        {icones.map((icone) => (
          <li className="text-center">
            <div className="text-4xl sm:text-5xl flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              {icone[0]}
            </div>
            <h2 className="mb-2 font-semibold leading-5">{icone[1]}</h2>
          </li>
        ))}
      </ul>
      <div className="text-center">
        <Link href="/a-propos">
          <a className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none">
            En savoir plus
            <span className="ml-1 -mr-2">🧐</span>
          </a>
        </Link>
      </div>
    </section>
  );
}
