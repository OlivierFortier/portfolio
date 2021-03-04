import { GetStaticProps } from "next";
import Head from "next/head";
import { client } from "../../lib/api";
import ListeProjets from "../../components/commun/ListeProjets";
import { gql } from "graphql-request";
import { ListeAppercuProjets } from "../../components/accueil/AppercuProjets";

export default function index({ projets }: ListeAppercuProjets) {
  return (
    <>
      <Head>
        <title>Olivier Fortier - Développeur</title>
        <meta
          name="description"
          content="Olivier Fortier - Liste de tous mes projets intéressants, personnels ou autres."
        />
      </Head>
      <div className="max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
        <section className=" text-gray-600 body-font py-8 sm:py-14">
          <h1 className="px-4 sm:text-left mb-6 font-sans text-4xl font-bold tracking-tight text-blue-600 dark:text-blue-400 sm:text-6xl sm:leading-none">
            Mes projets
          </h1>
          <p className="px-4 text-base sm:text-left text-blue-500 dark:text-blue-400 md:text-2xl mb-8">
            Une collection de mes plus récents projets intéressants
          </p>
          <div className="container px-5  mx-auto flex flex-wrap">
            <ListeProjets projets={projets} />
          </div>
        </section>
      </div>
    </>
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

  const { projets }: ListeAppercuProjets = await client.request(requeteGql);

  return {
    props: {
      projets,
    },
    revalidate: 10,
  };
};
