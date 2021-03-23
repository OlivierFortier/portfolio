import ListeTechnos from "../../components/apropos/ListeTechnos";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import { GetStaticProps } from "next";
import { gql } from "graphql-request";
import { client } from "../../lib/api";

export default function index({pageAPropos} : {pageAPropos : PageAPropos}) {
  // animation d'entrée du fond bleu
  const growRight = useSpring({
    config: {
      mass: 2,
      tension: 100,
    },
    delay: 200,
    from: { transform: "scaleX(0)" },
    transform: "scaleX(1)",
  });

  //hook pour détecter la visibilité d'un élément
  const { ref, entry } = useInView({ triggerOnce: true });

  //animer les CTA quand ils entrent dans la vue
  const popCta = useSpring({
    delay: 250,
    config: {
      tension: 300,
      friction: 16,
    },
    from: { transform: "scale(0)", opacity: 0 },
    transform: entry?.isIntersecting ? "scale(1)" : "scale(0)",
    opacity: entry?.isIntersecting ? 1 : 0,
  });

  return (
    <>
      <Head>
        <title>Olivier Fortier - Développeur</title>
        <meta
          name="description"
          content="Olivier Fortier - En savoir plus sur mes intérêts, et mes compétences."
        />
      </Head>
      <div className="pb-48 sm:pb-28 max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-4xl">
        <section className="body-font py-8 sm:py-14">
          <h1 className="px-4 mb-4 md:mb-16 font-sans text-4xl font-bold tracking-tight text-blue-600 dark:text-blue-500 sm:text-6xl sm:leading-none">
            {pageAPropos.titrePrincipal}
          </h1>
          <p className="px-4 text-lg mx-auto xl:max-w-4xl text-blue-500 mb-8">
            {pageAPropos.resumePersonnel}
          </p>
          <animated.div
            style={growRight}
            className="origin-left xl:max-w-4xl flex items-center justify-between mx-4 p-6 border-l-4 sm:py-8 dark:border-blue-600 dark:bg-blue-900 dark:text-blue-500 border-blue-300 bg-blue-50 text-blue-300"
          >
            <p>{pageAPropos.texteAnimationSlide}</p>
          </animated.div>
        </section>
        <section className="body-font py-8 pb-6 sm:py-14 sm:pt-0 sm:pb-8">
          <h1 className="px-4 mb-6 md:mb-8 font-sans text-xl font-bold tracking-tight text-blue-600 dark:text-blue-500 sm:text-3xl sm:leading-none">
            {pageAPropos.titreSection2}
          </h1>
          <p className="px-4 text-lg mx-auto xl:max-w-4xl text-blue-500">
            {pageAPropos.texteSection2}
          </p>
        </section>
        <ListeTechnos />
        <section className="py-6  text-blue-600">
          <div
            ref={ref}
            className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row"
          >
            <div className="flex flex-col justify-center lg:text-left">
              <h1 className="py-2 text-3xl font-bold leading-tight title-font dark:text-blue-500">
                Envie de discuter ?
              </h1>
            </div>
            <animated.div
              style={popCta}
              className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end"
            >
              <a
                target="_blank"
                aria-label="Ajoutez moi sur LinkedIn!"
                href="https://www.linkedin.com/in/olivier-fortier/"
                className="cursor-pointer hover:text-white hover:bg-blue-600 transition-colors inline-flex items-center px-6 py-3 rounded border-blue-600 border-2 text-blue-600"
              >
                <span className="flex flex-col items-start  leading-none">
                  <span className="font-semibold title-font">
                    Contactez-moi !
                  </span>
                </span>
              </a>
              <a
                target="_blank"
                aria-label="Consulter mon CV"
                href="/medias/Olivier_Fortier_CV.pdf"
                className="cursor-pointer hover:text-white hover:bg-blue-600 transition-colors inline-flex items-center px-5 py-3 rounded border-blue-600 border-2 text-blue-600"
              >
                <span className="flex flex-col items-start  leading-none">
                  <span className="font-semibold title-font">Mon CV</span>
                </span>
              </a>
            </animated.div>
          </div>
        </section>
      </div>
    </>
  );
}

type PageAPropos = {
  titrePrincipal : string;
  resumePersonnel: string;
  texteAnimationSlide: string;
  titreSection2: string;
  texteSection2: string;
}

// encore une fois de la magie de Next.js ! simplement pour générer la page à l'avance,
// selon le contenu que j'écris dans mon CMS
export const getStaticProps: GetStaticProps = async (context) => {

  const requetePage = gql`
    {
      pageAPropos(where: { id: "ckm7x42pc2s650b35d3tgaiv3" }) {
        titrePrincipal
        resumePersonnel
        texteAnimationSlide
        titreSection2
        texteSection2
      }
    }
  `;
  const { pageAPropos } : {pageAPropos : PageAPropos} = await client.request(requetePage);

  return {
    props: {
      pageAPropos
    },
    revalidate: 10,
  };
};

