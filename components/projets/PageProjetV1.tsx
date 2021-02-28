import Link from "next/link";
import { Projet } from "../../pages/projets/[slug]";
import Carousel from "./Carousel";

export default function PageProjetV1({projet} : {projet : Projet}) {
  return (
    <section className="px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="mx-auto  lg:max-w-4xl">
        <div className="max-w-xl mb-10   lg:max-w-4xl md:mb-12">

        {/* TODO : Gérer le rendu markdown de cette section depuis le CMS */}

          <h1 className="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-blue-600 sm:text-6xl ">
            Un projet X
          </h1>
          <h2 className="text-base text-blue-500 md:text-lg">
            Une solution à votre problème Y
          </h2>
        </div>
        <div className="mb-4 transition-shadow duration-300 lg:mb-6 lg:max-w-3xl lg:mx-auto">

          {/* TODO : gérer les types et le carousel dynamiquement */}
          <Carousel />
        </div>

        {/* TODO : Gérer le rendu markdown de cette section depuis le CMS */}
        <h2 className="max-w-xl mt-8 mb-4 text-2xl font-semibold text-blue-600 lg:max-w-3xl lg:mx-auto">
          Un sous-titre
        </h2>
        <p className="max-w-xl mb-10 text-base text-blue-500 lg:max-w-3xl lg:mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud ullamco laboris aliquip ex ea.
        </p>

        {/* TODO : Gérer le rendu markdown de cette section depuis le CMS */}
        <h2 className="max-w-xl mt-8 mb-4 text-2xl font-semibold text-blue-600 lg:max-w-3xl lg:mx-auto">
          Les technologies utilisées
        </h2>
        <ul className="space-y-3 max-w-xl mb-10 text-base text-blue-500 lg:max-w-3xl lg:mx-auto">
          <li>
            <span className="font-semibold">React </span> - pour controler le
            flow de l'interface utilisateur
          </li>
          <li>
            <span className="font-semibold">Next</span> - pour optimiser
            l'expérience développement et la performance
          </li>
          <li>
            <span className="font-semibold">TailwindCSS</span> - pour réaliser
            le formatage
          </li>
          <li>
            <span className="font-semibold">GraphQL</span> - pour gracieusement
            sélectionner le contenu pour mes pages
          </li>
          <li>
            <span className="font-semibold">Headless CMS</span> - pour gérer et
            créer le contenu du site
          </li>
        </ul>

        <Link href="/projets">
          <span className="flex my-6 lg:max-w-3xl lg:mx-auto">
            <a className="cursor-pointer font-semibold text-blue-600 p-2  border-blue-600 border-2 rounded transition-colors hover:bg-blue-600 hover:text-white">
              {"<"} Retour aux projets
            </a>
          </span>
        </Link>
      </div>
    </section>
  );
}
