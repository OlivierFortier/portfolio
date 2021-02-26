import Link from "next/link";

export default function ProjetAlternatif() {
  return (
    <section className="px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="mx-auto  lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto  lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-600 sm:text-4xl ">
            Un projet X
          </h2>
          <p className="text-base text-blue-500 md:text-lg">
            Une solution à votre problème Y
          </p>
        </div>
        <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            src="https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <p className="max-w-xl mb-10 text-base text-blue-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud ullamco laboris aliquip ex ea.
        </p>
        <Link href="/projets">
          <a className="cursor-pointer font-semibold text-blue-600 p-2 my-6 border-blue-600 border-2 rounded transition-colors hover:bg-blue-600 hover:text-white">
            {"<"} Retour aux projets
          </a>
        </Link>
      </div>
    </section>
  );
}
