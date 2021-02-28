import { gql } from "graphql-request";
import { GetStaticPaths, GetStaticProps } from "next";
import PageProjetV1 from "../../components/projets/PageProjetV1";
import PageProjetV2 from "../../components/projets/PageProjetV2";
import { client } from "../../lib/api";

export default function Projet({projet}) {
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

  const { projet } = await client.request(requeteGql, {
    slug: params.slug,
  });

  return {
    props: {
      projet,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { projets } = await client.request(gql`
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
