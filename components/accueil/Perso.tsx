import { useSpring, animated } from "react-spring";
import { PageAccueil } from "../../lib/types";
export default function Perso({textePerso} : {textePerso: PageAccueil}) {
  
  // animation d'entrée de la section
  const entreeHaut = useSpring({
    from: { transform: "translateY(35%)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    delay: 400
  });

  return (
    <animated.section
      style={entreeHaut}
      className=" pb-8 px-6 sm:px-0 text-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl md:-mt-20 lg:-mt-20 xl:-mt-16 mx-auto space-y-8 text-blue-600 dark:text-blue-300"
    >
      <p className="shadow-sm relative bg-blue-200 dark:bg-blue-900 p-6 -mx-6 rounded-2xl ">
        {textePerso.texteSectionBleue}
      </p>
      <p>
        {textePerso.texteSuiteSectionBleue}
      </p>
    </animated.section>
  );
}
