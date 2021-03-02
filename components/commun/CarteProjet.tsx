import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { AppercuProjet } from "../accueil/AppercuProjets";
import {animated} from "react-spring";

export default function CarteProjet({ projet, animation }: {projet : AppercuProjet; animation : React.CSSProperties}) {
  return (
    <animated.li style={animation} className="py-4 md:p-4 lg:w-1/2 md:w-full">
      <Link href={`/projets/${projet.slug}`}>
        <article className="cursor-pointer">
          <div className="flex items-center rounded-lg shadow-md dark:shadow-none dark:hover:transform dark:hover:scale-105 dark:bg-gray-800 dark:bg-opacity-60 transition-all hover:shadow-xl dark:hover:shadow-none p-8 md:flex-row lg:flex-col xl:flex-row flex-col">
            <div className="h-56 w-full md:w-1/2 lg:w-full xl:w-1/2 sm:mr-8 sm:mb-0 inline-flex mx-auto  justify-center rounded text-indigo-500 flex-shrink-0">
              <Image
                className="object-cover rounded-md"
                src={projet?.images[0]?.url || "/assets/img-placeholder.jpg"}
                width={projet?.images[0]?.width || 200}
                height={projet?.images[0]?.height || 200}
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-blue-600 text-xl title-font font-bold mb-3 mt-3 xl:mt-0">
                {projet?.titre || "Erreur : titre non défini"}
              </h2>
              <p className="leading-relaxed text-base text-blue-500">
                {projet?.sommaire || "Erreur : sommaire non défini"}
              </p>
              <a className="font-semibold text-lg mt-3 text-blue-600 inline-flex items-center">
                En savoir plus
                <BsArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </article>
      </Link>
    </animated.li>
  );
}
