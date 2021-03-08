import Link from "next/link";
// import Image from 'next/image';
import { useSpring, animated } from "react-spring";
import lottie from "lottie-web";
import { useEffect } from "react";
import svgAnim from "../../assets/hero-anim.json";
import { MutableRefObject } from "react";

export default function Hero({refPourScroll}) {

  // animation d'entrée du texte principal
  const entreeGauche = useSpring({
    from: { opacity: 0, transform: "scaleX(0.65)" },
    opacity: 1,
    transform: "scaleX(1)",
    delay: 100,
  });

  // animation d'entrée de l'image hero
  const entreeDroite = useSpring({
    transform: "scaleX(1)",
    opacity: 1,
    from: { transform: "scaleX(0.65)", opacity: 0 },
    delay: 250,
  });

  // animation lottie
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById("conteneurLottie"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: svgAnim,
    });
  }, []);

  // faire dérouler la page jusqu'en bas
  function scrollToAppercu<T extends HTMLElement>(refScroll : MutableRefObject<T>) {
    refScroll.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <section className="px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <animated.div
          style={entreeGauche}
          className=" overflow-x-hidden lg:self-start lg:pt-8 mb-10 lg:max-w-lg lg:pr-5 lg:mb-0"
        >
          <div className="max-w-xl mb-6">
            <h1 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight sm:text-6xl sm:leading-none text-blue-600 dark:text-blue-400">
              Olivier Fortier
            </h1>
            <h2 className="text-xl text-blue-600 dark:text-blue-400 md:text-2xl">
              Salut, je suis un développeur web passionné par les nouvelles
              technologies 👋
            </h2>
          </div>
          <div className="flex flex-col items-center md:flex-row">
              <a aria-label="Dérouler jusqu'au bas de la page rapidement" onClick={()=> scrollToAppercu(refPourScroll)} className="cursor-pointer text-lg inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-blue-600 dark:text-blue-400 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 border-2 border-blue-600 dark:border-blue-400  hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-blue-800 hover:text-white focus:shadow-outline focus:outline-none">
                En savoir plus 👇
              </a>
          </div>
        </animated.div>

        <animated.div
          style={entreeDroite}
          className="origin-right overflow-visible relative lg:w-1/2"
        >
          <div
            id="conteneurLottie"
            className="transform scale-110 sm:scale-125 object-cover w-full h-56 rounded sm:h-96 lg:-mt-8"
          ></div>
        </animated.div>
      </div>
    </section>
  );
}
