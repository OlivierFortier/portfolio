import Hero from '../components/accueil/Hero';
import Perso from "../components/accueil/Perso";
import AppercuProjet from '../components/accueil/AppercuProjets';
import AppercuTechnos from '../components/accueil/AppercuTechnos';

export default function Home() {
  return (
    <div className="max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
      <Hero />

      <Perso />

      <AppercuProjet />

      <AppercuTechnos />
    </div>
  );
}
