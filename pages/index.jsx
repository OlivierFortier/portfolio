import Hero from '../components/accueil/Hero';
import Perso from "../components/accueil/Perso";
import AppercuProjet from '../components/accueil/AppercuProjets';
import AppercuTechnos from '../components/accueil/AppercuTechnos';
import { client } from '../lib/api';
import { gql } from 'graphql-request';

export default function Home({projets}) {
  return (
    <div className="max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
      <Hero />

      <Perso />

      <AppercuProjet projets={projets}/>

      <AppercuTechnos />
    </div>
  );
}


export async function getStaticProps(context) {
  const testGql = gql`
    {
      projets {
        titre
        sommaire
        images {
          height
          width
          url
        }
        sousTitreDetails
        details
        sousTitreSectionOptionnelle
        sectionOptionnelle
        slug
      }
    }
  `;

  const { projets } = await client.request(testGql);

  return {
    props: {
      projets,
    },
  };
}