import React from "react";
import {
  TechnoGql,
  TechnoNet,
  TechnoNext,
  TechnoNode,
  TechnoReact,
  TechnoVue,
} from "./Technos";

export default function ListeTechnos() {
  return (
    <section className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-4 lg:py-6">
      <div className="max-w-xl mb-10 ">
        <h1 className=" mb-6 md:mb-8 font-sans text-xl font-bold tracking-tight text-blue-600 dark:text-blue-500 sm:text-3xl sm:leading-none">
          Mes technologies préférées
        </h1>
      </div>
      <div className="grid gap-12 row-gap-8 lg:grid-cols-3">
        <TechnoReact />
        <TechnoVue />
        <TechnoNext />
        <TechnoNode />
        <TechnoNet />
        <TechnoGql />
      </div>
    </section>
  );
}
