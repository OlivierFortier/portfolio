import Image from "next/image";
import Projet from "./Projet";

export default function Projets() {
  return (
    <section className="text-gray-600 body-font py-8">
      <h1 className="sm:text-center mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        Projets récents
      </h1>
      <p className="text-base sm:text-center text-gray-700 md:text-lg mb-8">Une collection de mes plus récents projets intéressants</p>
      <div className="container px-5  mx-auto flex flex-wrap">
        <ul className="flex flex-wrap -m-4">
          <Projet />
          <Projet />
          <Projet />
          <Projet />
        </ul>
      </div>
    </section>
  );
}
