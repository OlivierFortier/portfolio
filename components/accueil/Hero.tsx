import Link from "next/link";
import { useSpring, animated } from "react-spring";

export default function Hero() {

  const entreeGauche = useSpring({
    from : {opacity: 0.5, marginRight: "50rem"},
    opacity: 1, marginRight : "0"
  })

  const entreeDroite = useSpring({
    from : {opacity: 0.5, marginLeft: "50rem"},
    opacity: 1, marginLeft: "0"
  })

  return (
    <section className="px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">

        <animated.div  className="lg:self-start lg:pt-8 mb-10 lg:max-w-lg lg:pr-5 lg:mb-0" style={entreeGauche}>
          <div className="max-w-xl mb-6">
            <h1 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight sm:text-6xl sm:leading-none text-blue-600">
              Olivier Fortier
            </h1>
            <h2 className="text-xl text-blue-600 md:text-2xl">
              Salut, je suis un développeur web passionné par les nouvelles
              technologies 👋
            </h2>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link href="/a-propos">
              <a className="text-lg inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-blue-600 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 border-2 border-blue-600  hover:bg-blue-600 hover:text-white focus:shadow-outline focus:outline-none">
                En savoir plus 👇
              </a>
            </Link>
          </div>
        </animated.div>


        <animated.div  className="relative lg:w-1/2" style={entreeDroite}>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </animated.div>


      </div>
    </section>
  );
}
