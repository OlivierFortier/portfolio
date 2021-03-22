import Link from "next/link";
import GrilleSvgGauche from "./GrilleSvgGauche";
import { FaVuejs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextDotJs, SiDotNet, SiGraphql } from "react-icons/si";
import { animated, useSpring, useTrail } from 'react-spring'
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

export default function AppercuTechnos({setRef}) {
  
  // tableau des technologies
  const icones: Array<Array<JSX.Element | string>> = [
    [<FaReact />, "React"],
    [<FaVuejs />, "Vue"],
    [<SiNextDotJs />, "Next.js"],
    [<FaNodeJs />, "Node"],
    [<SiDotNet />, ".Net"],
    [<SiGraphql />, "GraphQl"],
  ];

  // hook pour détecter quand un élément entre dans la vue
  const { ref: refTrail, entry: entryTrail } = useInView({ triggerOnce: true });
  const { ref: refSpring, entry: entrySpring } = useInView({
    triggerOnce: true,
  });

  // animer l'apparition des badges de technos si l'élément est dans la vue
  const trail = useTrail(icones.length, {
    config: {
      mass: 1,
      friction: 15,
      tension: 200,
    },
    delay: 0,
    from: { transform: "scale(0)", opacity: 0 },
    transform: entryTrail?.isIntersecting ? "scale(1)" : "scale(0)",
    opacity: entryTrail?.isIntersecting ? 1 : 0,
  });

  // animer l'entrée du CTA
  const scaleIn = useSpring({
    config: {
      delay: 100,
      duration: 100,
      tension: 500,
      friction: 10,
      mass: 2,
    },
    from: { transform: "scale(0)", opacity: 0 },
    transform: entrySpring?.isIntersecting ? "scale(1)" : "scale(0)",
    opacity: entrySpring?.isIntersecting ? 1 : 0,
  });

  // monter l'état du ref pour scroll à partir de la section hero
  const refElem = useRef();

  useEffect(() => setRef(refElem), [refElem]);

  return (
    <section
      ref={refElem}
      className="px-4 py-8 sm:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:pb-8"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-600 dark:text-blue-400 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <GrilleSvgGauche />
            <span className="relative">Mes</span>
          </span>{" "}
          technos pref
        </h1>
        <p className="text-base text-blue-500 dark:text-blue-400 md:text-lg">
          J'utilise ces technologies chaque fois que j'en ai l'occasion
        </p>
      </div>
      <ul
        ref={refTrail}
        className="text-blue-600 dark:text-blue-400 grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6"
      >
        {/* boucle pour animer l'entrée des technologies */}
        {trail.map((props, index) => (
          <animated.li style={props} key={index} className="text-center">
            <div className="text-4xl sm:text-5xl flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 dark:bg-blue-900 sm:w-24 sm:h-24">
              {icones[index][0]}
            </div>
            <h2 className="mb-2 font-semibold leading-5">{icones[index][1]}</h2>
          </animated.li>
        ))}
      </ul>
      <div ref={refSpring} className="text-center">
        <Link href="/a-propos">
          <animated.a
            style={scaleIn}
            className="cursor-pointer inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white dark:hover:text-blue-900 transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-500 focus:shadow-outline focus:outline-none"
          >
            En savoir plus
            <span className="ml-1 -mr-2">🧐</span>
          </animated.a>
        </Link>
      </div>
    </section>
  );
}
