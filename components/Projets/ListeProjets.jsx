import CarteProjet from "./CarteProjet";

export default function ListeProjets({ nbProjets }) {
  let projsTemps = [];

  for (let i = 0; i < nbProjets; i++) {
    projsTemps.push(<CarteProjet key={i} />);
  }

  return <ul className="flex flex-wrap -m-4">{projsTemps}</ul>;
}
