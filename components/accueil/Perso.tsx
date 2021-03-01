import { useSpring, animated } from "react-spring";

export default function Perso() {
  
  const entreeHaut = useSpring({
    from: { transform: "translateY(20rem)", opacity: 0.5 },
    to: { transform: "translateY(0px)", opacity: 1 },
  });

  return (
    <animated.section
      style={entreeHaut}
      className=" pb-8 px-6 sm:px-0 text-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl lg:-mt-28 mx-auto space-y-8 text-indigo-600"
    >
      <p className="shadow-sm relative bg-blue-200 p-6 -mx-6 rounded-2xl ">
        J’adore travailler avec des outils modernes et efficaces. Je passe mon
        temps à jouer avec des frameworks et des librairies pour le plaisir. Ça
        m’arrive aussi d’aider les gens , les conseiller et les diriger vers une
        solution optimale.
      </p>
      <p>
        J’aime réaliser des projets de A à Z, en passant par le DevOps, le
        Back-End, aussi bien que le Front-End. J’aime avoir une vision global
        d’un produit, et toucher à tout ce qui à trait au cycle de vie d’un
        produit multimédia. C’est pourquoi je suis inscrit à L’ETS en Génie
        Logiciel.
      </p>
    </animated.section>
  );
}
