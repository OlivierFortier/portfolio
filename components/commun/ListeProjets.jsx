import CarteProjet from "./CarteProjet";

export default function ListeProjets({ nbProjets, projets }) {
  // let projsTemps = [];

  // for (let i = 0; i < nbProjets; i++) {
  //   projsTemps.push(<CarteProjet key={i} projet={projet}/>);
  // }

  return <ul className="flex flex-wrap -m-4">{

    projets.map(projet => <CarteProjet key={projet.slug} projet={projet}/>)
  }</ul>;
}
