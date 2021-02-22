import Projet1 from "./Projet1";

export default function Projets2() {
  return (
    <section className="text-gray-600 body-font py-8">
      <h2 className="w-full text-center mb-10 text-4xl">Projets récents</h2>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -m-4">
          <Projet1 />
          <Projet1 />
          <Projet1 />
          <Projet1 />
        </div>
      </div>
    </section>
  );
}
