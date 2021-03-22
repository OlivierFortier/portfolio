import CarteProjet from "./CarteProjet";
import { useTrail } from "react-spring";
import { useInView } from "react-intersection-observer";
import type { AppercuProjet } from "../../lib/types";

export default function ListeProjets({ projets, }: { projets: AppercuProjet[]; }) {

  // hook pour détecter quand un élément entre dans la vue
  const { ref, entry } = useInView({ triggerOnce: true, threshold: 0.1 });

  // animer si l'élément est dans la vue
  const trail = useTrail(projets.length, {
    delay: 250,
    from: { transform: "scale(0)", opacity: 0 },
    transform: entry?.isIntersecting ? "scale(1)" : "scale(0)",
    opacity: entry?.isIntersecting ? 1 : 0,
  });

  return (
    <ul ref={ref} className="justify-center flex flex-wrap -m-4">
      {/* boucle pour animer les cartes une  après l'autres */}
      {trail.map((props, index) => (
        <CarteProjet
          animation={props}
          key={projets[index].slug}
          projet={projets[index]}
        />
      ))}
    </ul>
  );
}
