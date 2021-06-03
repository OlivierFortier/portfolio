import Hero from "../components/accueil/Hero";
import Head from "next/head";
import Perso from "../components/accueil/Perso";
import AppercuProjet from "../components/accueil/AppercuProjets";
import AppercuTechnos from "../components/accueil/AppercuTechnos";
import { client } from "../lib/api";
import { gql } from "graphql-request";
import { GetStaticProps } from "next";
import { MutableRefObject, useState } from "react";
import type { AppercuProjet as appProjets, ListeAppercuProjets, PageAccueil } from "../lib/types";

export default function Home({ projets, pageAccueil }: {projets : appProjets[], pageAccueil: PageAccueil}) {

  // création d'un état de page pour sauvegarder le ref d'un élément auquel on veut scroll
  const [refElScroll, setRefElScroll] = useState< MutableRefObject<HTMLElement | null> >(null);

  return (
    <>
      <Head>
        <title>Olivier Fortier - Développeur</title>
        <meta
          name="description"
          content="Olivier Fortier - Développeur web, futur ingénieur logiciel et consultant à vôtre service. Je vous aide à trouver la bonne solution multimédia, mobile , et web !"
        />
      </Head>
      <div className="pb-48 sm:pb-28 max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
        <Hero refPourScroll={refElScroll} texteHero={pageAccueil} />
        <Perso textePerso={pageAccueil}/>
        <AppercuProjet projets={projets} />
        <AppercuTechnos setRef={setRefElScroll} />
      </div>
    </>
  );
}

// c'est ici que la magie du framework Next.js s'opère. 
// on peut précharger des données d'une source externe,
// dans mon cas, un CMS , et générer des pages statique , ce qui rend le chargement du site pratiquement 
// instantané !
export const getStaticProps: GetStaticProps = async (context) => {

  // grâce à graphql, je peux effectuer des requêtes à un API externe de manière
  // déclarative et intuitive, dans une forme qui imite le JSON que je recevrai en réponse

  // ici, je fais une requête pour obtenir les 4 projets les plus récents,
  // mais seulement leur titre, sommaire et image 
  const requeteProjets = gql`
    {
      projets(orderBy: date_DESC, first: 4) {
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

  // ici, je fais une requête pour obtenir le contenu de texte de ma page, qui provient encore une fois de mon CMS
  const requetePage = gql`
    {
      pageAccueil(where: { id: "ckm7x3rwg2sn10b87n5au71g7" }) {
        titrePrincipal
        phraseDaccueil
        boutonCtaSectionHero
        texteSectionBleue
        texteSuiteSectionBleue
        boutonCtaSectionTechnos
      }
    }
  `;

  // J'effectue mes requêtes par la suite avec le client graphQl
  const { projets }: ListeAppercuProjets = await client.request(requeteProjets);
  const { pageAccueil } : {pageAccueil : PageAccueil} = await client.request(requetePage);

  // je retourne les données obtenues, qui seront disponibles plus haut dans les props de mon composant react 
  return {
    props: {
      projets,
      pageAccueil
    },
    revalidate: 10000,
  };
};
