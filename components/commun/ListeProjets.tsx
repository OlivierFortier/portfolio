import { ListeAppercuProjets } from "../accueil/AppercuProjets";
import CarteProjet from "./CarteProjet";

export default function ListeProjets({ projets }: ListeAppercuProjets) {
  return (
    <ul className="flex flex-wrap -m-4">
      {projets.map((projet) => (
        <CarteProjet key={projet.slug} projet={projet} />
      ))}
    </ul>
  );
}
