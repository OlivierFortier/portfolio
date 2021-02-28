import React from "react";
import IconeEclairSvgPetit from './IconeEclairSvgPetit';

export default function ListeTechnos() {
  return (
    <section className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-4 lg:py-6">
      <div className="max-w-xl mb-10 ">
        <h1 className=" mb-6 md:mb-8 font-sans text-xl font-bold tracking-tight text-blue-600 sm:text-3xl sm:leading-none">
          Mes technologies préférées
        </h1>
      </div>
      <div className="grid gap-12 row-gap-8 lg:grid-cols-3">
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <IconeEclairSvgPetit />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold text-blue-600 leading-5">
              React
            </h6>
            <p className="text-sm text-blue-500">Un cadriciel front-end</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <IconeEclairSvgPetit />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold text-blue-600 leading-5">Vue</h6>
            <p className="text-sm text-blue-500">Un cadriciel front-end</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <IconeEclairSvgPetit />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold text-blue-600 leading-5">
              Next.js
            </h6>
            <p className="text-sm text-blue-500">
              Le méta-cadriciel isomorphe pour react
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <IconeEclairSvgPetit />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold text-blue-600 leading-5">Node</h6>
            <p className="text-sm text-blue-500">
              Le fameux runtime qui a changé le monde
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <IconeEclairSvgPetit />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold text-blue-600 leading-5">.Net</h6>
            <p className="text-sm text-blue-500">
              L'écosystème tout-en-un moderne
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <IconeEclairSvgPetit />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold text-blue-600 leading-5">
              GraphQL
            </h6>
            <p className="text-sm text-blue-500">
              La façon moderne d'interagir avec les données
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
