import { gql } from "graphql-request";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "../../lib/api";
import Carousel from "../../components/projets/Carousel";
import Markdown from "markdown-to-jsx";
import { useRouter } from "next/router";
import type { AppercuProjet } from "../../lib/types";

type Projet = AppercuProjet & {
  lienUrlDuProjet: string;
  lienUrlDuCode: string;
  sousTitreDetails: string;
  details: string;
  sousTitreSectionOptionnelle: string;
  sectionOptionnelle: string;
};

export default function Projet({ projet }: { projet: Projet }) {
  const router = useRouter();

  // grace à Next.js, je peux détecter si une page n'a pas finie d'être générée et afficher 
  // un message très facilement
  if (router.isFallback) {
    return (
      <section className="flex justify-center items-center">
        <h1>Chargement...</h1>
      </section>
    );
  }

  return (
    <>
      <Head>
        <title>Olivier Fortier - Développeur</title>
        <meta
          name="description"
          content={`Olivier Fortier - projet : ${projet.titre} - ${projet.sommaire} `}
        />
      </Head>
      <section className="pb-48 sm:pb-28 px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="mx-auto  lg:max-w-4xl">
          <div className="max-w-xl mb-10   lg:max-w-4xl md:mb-12">
            <h1 className=" mb-6 font-sans text-4xl font-bold leading-none tracking-tight dark:text-blue-400 text-blue-600 sm:text-6xl ">
              {projet.titre || "Erreur : titre non défini"}
            </h1>
            <h2 className="text-base text-blue-500 dark:text-blue-400 md:text-lg">
              {projet.sommaire || "Erreur : sommaire non défini"}
            </h2>
          </div>
          <div className="mb-4 transition-shadow duration-300 lg:mb-6 lg:max-w-3xl lg:mx-auto">
            <span className="flex justify-between text-blue-700 dark:text-blue-500">
              {projet.lienUrlDuProjet && (
                <a
                  target="_blank"
                  aria-label="Lien vers le site du projet"
                  className="break-words underline"
                  href={projet.lienUrlDuProjet}
                >
                  {"Voir le projet"}
                </a>
              )}
              {projet.lienUrlDuCode && (
                <a
                  target="_blank"
                  aria-label="Lien vers le répo GitHub du projet"
                  className="break-words underline"
                  href={projet.lienUrlDuCode}
                >
                  {"Voir le code"}
                </a>
              )}
            </span>
            <Carousel images={projet.images} />
          </div>

          <h2 className="max-w-xl mt-8 mb-4 text-2xl font-semibold text-blue-600 dark:text-blue-400 lg:max-w-3xl lg:mx-auto">
            {projet.sousTitreDetails ||
              "Erreur : sous-titre des détails non défini"}
          </h2>
          <Markdown className="space-y-4 max-w-xl mb-10 text-base text-blue-500 lg:max-w-3xl lg:mx-auto">
            {projet.details ||
              "Erreur : contenu de la section détails non définie"}
          </Markdown>

          {projet.sousTitreSectionOptionnelle && (
            <h2 className="max-w-xl mt-8 mb-4 text-2xl font-semibold text-blue-600 dark:text-blue-400 lg:max-w-3xl lg:mx-auto">
              {projet.sousTitreSectionOptionnelle}
            </h2>
          )}

          {projet.sectionOptionnelle && (
            <Markdown className="space-y-3 max-w-xl mb-10 text-base text-blue-500 lg:max-w-3xl lg:mx-auto">
              {projet.sectionOptionnelle}
            </Markdown>
          )}

          <span className="flex my-6 lg:max-w-3xl lg:mx-auto">
            <Link href="/projets">
              <a
                aria-label="Retourner à la liste des projets"
                className="bg-gray-100 dark:bg-transparent cursor-pointer font-semibold text-blue-600 p-2  border-blue-600 border-2 rounded transition-colors hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white"
              >
                {"<"} Retour aux projets
              </a>
            </Link>
          </span>
        </div>
      </section>
    </>
  );
}


// encore une fois, la magie de Next.js et GraphQL !!
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const requeteGql = gql`
    query unProjet($slug: String!) {
      projet(where: { slug: $slug }) {
        titre
        sommaire
        lienUrlDuProjet
        lienUrlDuCode
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
    revalidate: 10000,
  };
};

// encore plus de magie de Next.js ! Cette fois-ci, on peut générer des pages dynamiquement,
// donc chaque fois que je crée du nouveau contenu dans mon CMS, Next.js va automatiquement générer une nouvelle page
// pour ce contenu !
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
    fallback: true,
  };
};
