import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {FaReact} from 'react-icons/fa';
import { Hero } from "../components/Hero";
import { Hero2 } from "../components/Hero2";
import Technos from "../components/Technos";
import Hero3 from "../components/Hero3";
import { Hero1 } from "../components/Hero1";
import Hero4 from "../components/Hero4";
import Projets1 from "../components/Projets1";

export default function Home() {
  return (
    <div className="max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
      
      {/* <Hero/> */}
      {/* <Hero1/> */}
      <Hero2/>
      {/* <Hero3/> */}

      <section className="text-lg ">
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
      </section>

      
      <Projets1/>

      <Technos/>

    </div>
  );
}
