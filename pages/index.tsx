import Hero from '../components/accueil/Hero';
import Perso from "../components/accueil/Perso";
import AppercuProjet, { ListeAppercuProjets } from '../components/accueil/AppercuProjets';
import AppercuTechnos from '../components/accueil/AppercuTechnos';
import { client } from '../lib/api';
import { gql } from 'graphql-request';
import { GetStaticProps } from 'next';
import { MutableRefObject, useState } from 'react';

export default function Home({projets} : ListeAppercuProjets) {

  // création d'un état de page pour sauvegarder le ref d'un élément auquel on veut scroll
  const [refElScroll, setRefElScroll] = useState<MutableRefObject<HTMLElement | null>>(null);
  
  return (
    <div className="max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
      <Hero refPourScroll={refElScroll} />

      <Perso />

      <AppercuProjet projets={projets}/>

      <AppercuTechnos setRef={setRefElScroll}/>
    </div>
  );
}


export const getStaticProps: GetStaticProps = async (context) => {
  const requeteGql = gql`
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

  const { projets } : ListeAppercuProjets = await client.request(requeteGql);

  return {
    props: {
      projets,
    },
  };
}