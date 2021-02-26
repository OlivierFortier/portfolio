import Link from "next/link";

export default function ProjetAlternatif() {
  return (
    <section className="px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="mx-auto  lg:max-w-4xl">
        <div className="max-w-xl mb-10   lg:max-w-4xl md:mb-12">
          <h1 className="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-blue-600 sm:text-6xl ">
            Un projet X
          </h1>
          <h2 className="text-base text-blue-500 md:text-lg">
            Une solution à votre problème Y
          </h2>
        </div>
        <div className="mb-4 transition-shadow duration-300 lg:mb-6 lg:max-w-3xl lg:mx-auto">
          <img
            className="mx-auto object-cover max-w-full h-auto"
            src="https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <h2 className="max-w-xl mt-8 mb-4 text-2xl font-semibold text-blue-600 lg:max-w-3xl lg:mx-auto">
          Un sous-titre
        </h2>
        <p className="max-w-xl mb-10 text-base text-blue-500 lg:max-w-3xl lg:mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud ullamco laboris aliquip ex ea.
        </p>
        <Link href="/projets">
          <span className="flex my-6 lg:max-w-3xl lg:mx-auto">
            <a className="cursor-pointer font-semibold text-blue-600 p-2  border-blue-600 border-2 rounded transition-colors hover:bg-blue-600 hover:text-white">
              {"<"} Retour aux projets
            </a>
          </span>
        </Link>
      </div>
    </section>
  );
}