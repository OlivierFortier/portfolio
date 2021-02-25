import Projet from './Projet';

export default function ListeProjets() {
    return (
        <section className=" text-gray-600 body-font py-8 sm:py-14">
      <h1 className="px-4 sm:text-left mb-6 font-sans text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl sm:leading-none">
        Mes projets
      </h1>
      <p className="px-4 text-base sm:text-left text-blue-500 md:text-2xl mb-8">
        Une collection de mes plus récents projets intéressants
      </p>
      <div className="container px-5  mx-auto flex flex-wrap">
        <ul className="flex flex-wrap -m-4">
          <Projet />
          <Projet />
          <Projet />
          <Projet />
          <Projet />
          <Projet />
          <Projet />
          <Projet />
        </ul>
      </div>
    </section>
    )
}
