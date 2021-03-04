import { gql } from "graphql-request";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { AppercuProjet } from "../../components/accueil/AppercuProjets";
import { client } from "../../lib/api";
import Carousel from "../../components/projets/Carousel";
import ReactMarkdown from "react-markdown";

export type Projet = AppercuProjet & {
  sousTitreDetails: string;
  details: string;
  sousTitreSectionOptionnelle: string;
  sectionOptionnelle: string;
};

export default function Projet({ projet }: { projet: Projet }) {
  return (
    <>
      <Head>
        <title>Olivier Fortier - Développeur</title>
        <meta
          name="description"
          content={`Olivier Fortier - projet : ${projet.titre} - ${projet.sommaire} `}
        />
      </Head>
      <section className="px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="mx-auto  lg:max-w-4xl">
          <div className="max-w-xl mb-10   lg:max-w-4xl md:mb-12">
            <h1 className="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight dark:text-blue-400 text-blue-600 sm:text-6xl ">
              {projet.titre || "Erreur : titre non défini"}
            </h1>
            <h2 className="text-base text-blue-500 dark:text-blue-400 md:text-lg">
              {projet.sommaire || "Erreur : sommaire non défini"}
            </h2>
          </div>
          <div className="mb-4 transition-shadow duration-300 lg:mb-6 lg:max-w-3xl lg:mx-auto">
            <Carousel images={projet.images} />
          </div>

          <h2 className="max-w-xl mt-8 mb-4 text-2xl font-semibold text-blue-600 dark:text-blue-400 lg:max-w-3xl lg:mx-auto">
            {projet.sousTitreDetails ||
              "Erreur : sous-titre des détails non défini"}
          </h2>
          <ReactMarkdown className="max-w-xl mb-10 text-base text-blue-500 lg:max-w-3xl lg:mx-auto">
            {projet.details ||
              "Erreur : contenu de la section détails non définie"}
          </ReactMarkdown>

          {projet.sousTitreSectionOptionnelle && (
            <h2 className="max-w-xl mt-8 mb-4 text-2xl font-semibold text-blue-600 dark:text-blue-400 lg:max-w-3xl lg:mx-auto">
              {projet.sousTitreSectionOptionnelle}
            </h2>
          )}

          {projet.sectionOptionnelle && (
            <ReactMarkdown className="space-y-3 max-w-xl mb-10 text-base text-blue-500 lg:max-w-3xl lg:mx-auto">
              {projet.sectionOptionnelle}
            </ReactMarkdown>
          )}

          <span className="flex my-6 lg:max-w-3xl lg:mx-auto">
            <Link href="/projets">
              <a aria-label="Retourner à la liste des projets" className="cursor-pointer font-semibold text-blue-600 p-2  border-blue-600 border-2 rounded transition-colors hover:bg-blue-600 hover:text-white">
                {"<"} Retour aux projets
              </a>
            </Link>
          </span>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
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

  const { projet }: { projet: Projet } = await client.request(requeteGql, {
    slug: params.slug,
  });

  return {
    props: {
      projet,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  type CheminsProjets = {
    titre: string;
    slug: string;
  };

  const { projets }: { projets: CheminsProjets[] } = await client.request(gql`
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
};
