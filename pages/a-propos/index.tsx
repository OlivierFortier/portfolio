import ListeTechnos from "../../components/apropos/ListeTechnos";


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

      <ListeTechnos />

      <section className="py-6  text-blue-600">
        <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
          <div className="flex flex-col justify-center lg:text-left">
            <h1 className="py-2 text-3xl font-bold leading-tight title-font">
              Envie de discuter ?
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
              <a href="https://www.linkedin.com/in/olivier-fortier/" className="cursor-pointer hover:text-white hover:bg-blue-600 transition-colors inline-flex items-center px-6 py-3 rounded border-blue-600 border-2 text-blue-600">
                <span className="flex flex-col items-start  leading-none">
                  <span className="font-semibold title-font">Contactez-moi !</span>
                </span>
              </a>
            
              <a href="/assets/Olivier_Fortier_CV.pdf" className="cursor-pointer hover:text-white hover:bg-blue-600 transition-colors inline-flex items-center px-5 py-3 rounded border-blue-600 border-2 text-blue-600">
                <span className="flex flex-col items-start  leading-none">
                  <span className="font-semibold title-font">Mon CV</span>
                </span>
              </a>
            
          </div>
        </div>
      </section>
    </div>
  );
}