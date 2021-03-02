import ListeProjets from "../commun/ListeProjets";
import GrilleSvgDroit from "./GrilleSvgDroit";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

export type ImageProjet = {
  /** Hauteur de l'image */
  height: number;
  /** Largeur de l'image */
  width: number;
  /** Chemin de l'image */
  url: string;
};

export type AppercuProjet = {
  /**Titre du projet */
  titre: string;
  /**Sommaire représentant le projet */
  sommaire: string;
  /**Tableau des images du projet */
  images: ImageProjet[];
  /**Slug du projet, utilisé pour les chemins et url */
  slug: string;
};

export type ListeAppercuProjets = {
  /** Tableau des projets */
  projets: AppercuProjet[];
};

export default function AppercuProjets({ projets }: ListeAppercuProjets) {

  // hook pour détecter quand un élément entre dans la vue
  const { ref, entry } = useInView({ triggerOnce: true });

  // animer si l'élément est dans la vue
  const scaleIn = useSpring({
    from: { transform: "scale(0)", opacity: 0 },
    to: entry?.isIntersecting && { transform: "scale(1)", opacity: 1 },
  });

  return (
    <section
      id="appercuProjets"
      className=" text-gray-600 body-font py-8 sm:py-14"
    >
      <h1 className="px-4 sm:text-center mb-6 font-sans text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl sm:leading-none">
        Projets{" "}
        <span className="relative inline-block">
          {" "}
          <span className="relative">récents</span>
          <GrilleSvgDroit />
        </span>
      </h1>
      <p className="px-4 text-base sm:text-center text-blue-500 md:text-lg mb-8">
        Une collection de mes plus récents projets intéressants
      </p>
      <div className="container px-5  mx-auto flex flex-wrap">
        <animated.ul
          style={scaleIn}
          ref={ref}
          className="flex flex-wrap justify-center "
        >
          <ListeProjets projets={projets} />
        </animated.ul>
      </div>
    </section>
  );
}
