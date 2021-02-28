import Hero from '../components/accueil/Hero';
import Perso from "../components/accueil/Perso";
import AppercuProjet, { ListeAppercuProjets } from '../components/accueil/AppercuProjets';
import AppercuTechnos from '../components/accueil/AppercuTechnos';
import { client } from '../lib/api';
import { gql } from 'graphql-request';
import { GetStaticProps } from 'next';

export default function Home({projets} : ListeAppercuProjets) {
  return (
    <div className="max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
      <Hero />

      <Perso />

      <AppercuProjet projets={projets}/>

      <AppercuTechnos />
    </div>
  );
}


export const getStaticProps: GetStaticProps = async (context) => {
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
        slug
      }
    }
  `;

  const { projets } : ListeAppercuProjets = await client.request(testGql);

  return {
    props: {
      projets,
    },
  };
}