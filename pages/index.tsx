import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
      <section className="mb-4 flex flex-col-reverse md:flex-col lg:flex-row">
        <span className="space-y-2 lg:w-1/2">
          <h1 className="text-5xl mt-2">Olivier Fortier</h1>
          <h2 className="text-2xl">
            Salut, je suis un développeur web passionné par les nouvelles
            technologies 🤙
          </h2>
          <Link href="/">
            <a className="inline-block p-2 border-4 border-blue-700 rounded-md">
              En savoir plus 👋
            </a>
          </Link>
        </span>
        <Image
          src="/assets/diego_unsplash.jpg"
          width={445}
          height={394}
          alt="hero"
          className=" object-cover rounded-lg lg:w-1/2"
        />
      </section>

      <section className="text-lg">
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
      
    </div>
  );
}
