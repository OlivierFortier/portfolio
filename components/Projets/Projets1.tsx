import Image from "next/image";
import Projet from "./Projet";

export default function Projets1() {
  return (
    <section className="text-gray-600 body-font py-8">
      <h2 className="w-full text-center mb-10 text-4xl">Projets récents</h2>
      <div className="container px-5  mx-auto flex flex-wrap">
        <div className="flex flex-wrap -m-4">
          <Projet />
          <Projet />
          <Projet />
          <Projet />
        </div>
      </div>
    </section>
  );
}
