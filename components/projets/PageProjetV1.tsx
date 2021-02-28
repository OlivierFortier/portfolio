import Link from "next/link";
import { Projet } from "../../pages/projets/[slug]";
import Carousel from "./Carousel";
import ReactMarkdown from "react-markdown";

export default function PageProjetV1({ projet }: { projet: Projet }) {
  return (
    <section className="px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="mx-auto  lg:max-w-4xl">
        <div className="max-w-xl mb-10   lg:max-w-4xl md:mb-12">
          {/* TODO : Gérer le rendu markdown de cette section depuis le CMS */}

          <h1 className="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-blue-600 sm:text-6xl ">
            {projet.titre || "Erreur : titre non défini"}
          </h1>
          <h2 className="text-base text-blue-500 md:text-lg">
            {projet.sommaire || "Erreur : sommaire non défini"}
          </h2>
        </div>
        <div className="mb-4 transition-shadow duration-300 lg:mb-6 lg:max-w-3xl lg:mx-auto">
          <Carousel images={projet.images} />
        </div>

        <h2 className="max-w-xl mt-8 mb-4 text-2xl font-semibold text-blue-600 lg:max-w-3xl lg:mx-auto">
          {projet.sousTitreDetails ||
            "Erreur : sous-titre des détails non défini"}
        </h2>
        <ReactMarkdown className="max-w-xl mb-10 text-base text-blue-500 lg:max-w-3xl lg:mx-auto">
          {projet.details || "Erreur : contenu de la section détails non définie"}
        </ReactMarkdown>

        {projet.sousTitreSectionOptionnelle && (
          <h2 className="max-w-xl mt-8 mb-4 text-2xl font-semibold text-blue-600 lg:max-w-3xl lg:mx-auto">
            {projet.sousTitreSectionOptionnelle}
          </h2>
        )}

        {projet.sectionOptionnelle && (
          <ReactMarkdown className="space-y-3 max-w-xl mb-10 text-base text-blue-500 lg:max-w-3xl lg:mx-auto">
            {projet.sectionOptionnelle}
          </ReactMarkdown>
        )}

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
