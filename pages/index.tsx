import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {FaReact} from 'react-icons/fa';
import  Hero  from "../components/Hero/Hero";
import  Hero2  from "../components/Hero/Hero2";
import Technos from "../components/Technos/Technos";
import Hero3 from "../components/Hero/Hero3";
import  Hero1  from "../components/Hero/Hero1";
import Projets1 from "../components/Projets/Projets1";
import Perso1 from "../components/Perso/Perso1";
import Technos1 from "../components/Technos/Technos1";
import Technos2 from "../components/Technos/Technos2";
import Technos3 from "../components/Technos/Technos3";
import Technos4 from "../components/Technos/Technos4";
import Projets2 from "../components/Projets/Projets2";

export default function Home() {
  return (
    <div className="max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
      
      {/* <Hero/> */}
      {/* <Hero1/> */}
      <Hero2/>
      {/* <Hero3/> */}

      {/* <section className="text-lg ">
        <p className="relative bg-blue-200 p-7 -mx-7 rounded-2xl">
          J’adore travailler avec des outils modernes et efficaces. Je passe mon
          temps à jouer avec des frameworks et des librairies pour le plaisir.
          Ça m’arrive aussi d’aider les gens , les conseiller et les diriger
          vers une solution optimale.
        </p>
        <p>
          J’aime réaliser des projets de A à Z, en passant par le DevOps, le
          Back-End, aussi bien que le Front-End. J’aime avoir une vision global
          d’un produit, et toucher à tout ce qui à trait au cycle de vie d’un
          produit multimédia. C’est pourquoi je suis inscrit à L’ETS en Génie
          Logiciel.
        </p>
      </section> */}

      <Perso1/>

      
      <Projets1/>

      {/* <Projets2/> */}

      {/* <Technos/> */}

      {/* <Technos1/> */}

      <Technos2/>

      {/* <Technos3/> */}

      {/* <Technos4/> */}

    </div>
  );
}
