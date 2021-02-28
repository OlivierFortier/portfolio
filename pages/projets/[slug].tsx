import { gql } from "graphql-request";
import { GetStaticPaths, GetStaticProps } from "next";
import { AppercuProjet } from "../../components/accueil/AppercuProjets";
import PageProjetV1 from "../../components/projets/PageProjetV1";
import PageProjetV2 from "../../components/projets/PageProjetV2";
import { client } from "../../lib/api";


export type Projet = AppercuProjet & {
  sousTitreDetails : string;
  details : string;
  sousTitreSectionOptionnelle: string;
  sectionOptionnelle: string;
}

export default function Projet({projet} : {projet : Projet}) {
  return (
    //  <PageProjetV2/>
    <PageProjetV1 projet={projet}/>
  );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const requeteGql = gql`
    query unProjet($slug: String!) {
      projet(where: { slug: $slug }) {
        titre
        sommaire
        images {
          url
          height
          width
        }
        sousTitreDetails
        details
        sousTitreSectionOptionnelle
        sectionOptionnelle
      }
    }
  `;

  const {projet} : {projet : Projet} = await client.request(requeteGql, {
    slug: params.slug,
  });

  return {
    props: {
      projet,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {

  type CheminsProjets = {
    titre: string;
    slug: string;
  }

  const  {projets} : {projets : CheminsProjets[]}  = await client.request(gql`
    {
      projets {
        slug
        titre
      }
    }
  `);

  return {
    paths: projets.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}
