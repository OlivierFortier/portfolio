import Hero from "../components/Hero/Hero";
import AppercuTechnos from "../components/Technos/AppercuTechnos";
import Projets from "../components/Projets/AppercuProjets";
import Perso from "../components/Perso/Perso";

export default function Home() {
  return (
    <div className="max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
      <Hero />

      <Perso />

      <Projets />

      <AppercuTechnos />
    </div>
  );
}
