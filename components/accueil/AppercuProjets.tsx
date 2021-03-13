import type { ListeAppercuProjets } from "../../lib/types";
import ListeProjets from "../commun/ListeProjets";
import GrilleSvgDroit from "./GrilleSvgDroit";

export default function AppercuProjets({ projets }: ListeAppercuProjets) {
  return (
    <section
      id="appercuProjets"
      className="body-font py-8 sm:py-14"
    >
      <h1 className="px-4 sm:text-center mb-6 font-sans text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400 sm:text-4xl sm:leading-none">
        Projets{" "}
        <span className="relative inline-block">
          {" "}
          <span className="relative">récents</span>
          <GrilleSvgDroit />
        </span>
      </h1>
      <p className="px-4 text-base sm:text-center text-blue-500 dark:text-blue-400 md:text-lg mb-8">
        Une collection de mes plus récents projets intéressants
      </p>
      <div className="container px-5  mx-auto flex flex-wrap">
        <ListeProjets projets={projets} />
      </div>
    </section>
  );
}
