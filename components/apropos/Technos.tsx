import { FaReact, FaVuejs, FaNodeJs } from "react-icons/fa";
import { SiNextDotJs, SiDotNet, SiGraphql } from "react-icons/si";

export function TechnoReact() {
  return (
    <div className="flex">
      <div className="mr-4">
        <div className="text-blue-700 text-2xl flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
          <FaReact />
        </div>
      </div>
      <div>
        <h6 className="mb-2 font-semibold text-blue-600 leading-5">React</h6>
        <p className="text-sm text-blue-500">Le cadriciel front-end le plus populaire</p>
      </div>
    </div>
  );
}

export function TechnoVue() {
  return (
    <div className="flex">
      <div className="mr-4">
        <div className="text-blue-700 text-2xl flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
          <FaVuejs />
        </div>
      </div>
      <div>
        <h6 className="mb-2 font-semibold text-blue-600 leading-5">Vue</h6>
        <p className="text-sm text-blue-500">Le cadriciel front-end javascript progressif</p>
      </div>
    </div>
  );
}

export function TechnoNext() {
  return (
    <div className="flex">
      <div className="mr-4">
        <div className="text-blue-700 text-2xl flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
          <SiNextDotJs />
        </div>
      </div>
      <div>
        <h6 className="mb-2 font-semibold text-blue-600 leading-5">Next.js</h6>
        <p className="text-sm text-blue-500">
          Le méta-cadriciel isomorphe pour react
        </p>
      </div>
    </div>
  );
}

export function TechnoNode() {
  return (
    <div className="flex">
      <div className="mr-4">
        <div className="text-blue-700 text-2xl flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
          <FaNodeJs />
        </div>
      </div>
      <div>
        <h6 className="mb-2 font-semibold text-blue-600 leading-5">Node</h6>
        <p className="text-sm text-blue-500">
          Le fameux runtime qui a changé le monde
        </p>
      </div>
    </div>
  );
}

export function TechnoNet() {
  return (
    <div className="flex">
      <div className="mr-4">
        <div className="text-blue-700 text-2xl flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
          <SiDotNet />
        </div>
      </div>
      <div>
        <h6 className="mb-2 font-semibold text-blue-600 leading-5">.Net</h6>
        <p className="text-sm text-blue-500">L'écosystème OOP open-source moderne</p>
      </div>
    </div>
  );
}

export function TechnoGql() {
  return (
    <div className="flex">
      <div className="mr-4">
        <div className="text-blue-700 text-2xl flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
          <SiGraphql />
        </div>
      </div>
      <div>
        <h6 className="mb-2 font-semibold text-blue-600 leading-5">GraphQL</h6>
        <p className="text-sm text-blue-500">
          La façon moderne d'interagir avec les données
        </p>
      </div>
    </div>
  );
}
