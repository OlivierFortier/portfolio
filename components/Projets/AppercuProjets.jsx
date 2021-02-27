import Image from "next/image";
import Projet from "./Projet";

export default function AppercuProjets() {
  return (
    <section id="appercuProjets" className=" text-gray-600 body-font py-8 sm:py-14">
      <h1 className="px-4 sm:text-center mb-6 font-sans text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl sm:leading-none">
        Projets{" "}
        <span className="relative inline-block">{" "}
          <span className="relative">récents</span>
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 right-0 z-0 hidden w-32 -mt-8 -mr-20 text-blue-400 lg:w-32 lg:-mr-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
              width="52"
              height="24"
            />
          </svg>
        </span>
      </h1>
      <p className="px-4 text-base sm:text-center text-blue-500 md:text-lg mb-8">
        Une collection de mes plus récents projets intéressants
      </p>
      <div className="container px-5  mx-auto flex flex-wrap">
        <ul className="flex flex-wrap justify-center ">
          <Projet />
          <Projet />
          <Projet />
          <Projet />

      
        </ul>
      </div>
    </section>
  );
}
