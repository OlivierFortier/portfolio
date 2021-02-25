import ListeTechnos from '../../components/Technos/ListeTechnos';

export default function index() {
  return (
    <div className="max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-4xl">
      <section className="body-font py-8 sm:py-14">
        <h1 className="px-4 mb-4 md:mb-16 font-sans text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl sm:leading-none">
          Qui suis-je?
        </h1>
        <p className="px-4 text-lg mx-auto xl:max-w-4xl text-blue-500 mb-8">
          Futur ingénieur logiciel passionné par le monde du web ! Curieux de
          nature et autodidacte, je suis facilement excité par les nouvelles
          technologies. Je joue avec le web depuis plus de 5 ans, avec 2+ ans
          d’expertise professionnelle. Je passe mon temps à apprendre pour le
          plaisir, et à mentorer des gens dans leurs études et projets
        </p>

        <div className="xl:max-w-4xl flex items-center justify-between mx-4 p-6 border-l-4 sm:py-8 border-blue-300 bg-blue-50 text-blue-300">
          <p>
            J’adore les belles interfaces et les expériences utilisateur fluides
          </p>
        </div>
      </section>

      <section className="body-font py-8 pb-6 sm:py-14 sm:pt-0 sm:pb-8">
        <h1 className="px-4 mb-6 md:mb-8 font-sans text-xl font-bold tracking-tight text-blue-600 sm:text-3xl sm:leading-none">
          Intérêts professionnels
        </h1>
        <p className="px-4 text-lg mx-auto xl:max-w-4xl text-blue-500">
          Je suis un développeur full-stack, mais j’ai un petit coup de coeur
          pour le front-end. J’aime m’impliquer autant dans le DevOps, que dans
          le back-end, en passant par la gestion d’état front-end, ou bien
          encore l’accessibilité de l’expérience utilisateur.La cerise sur le
          gateau, j’adore aider les gens et agir à titre de mentor. Je me
          débrouille pas mal dans la gestion d’une équipe et la direction d’un
          projet !
        </p>
      </section>

      <ListeTechnos/>

    </div>
  );
}
