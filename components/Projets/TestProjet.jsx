import Link from "next/link";

export default function TestProjet() {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10   lg:max-w-2xl md:mb-12">
        <h1 className="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-blue-600 sm:text-6xl ">
          Un certain projet
        </h1>
        <h2 className="text-base text-blue-500 md:text-lg">
          Une solution à un problème y.
        </h2>
      </div>
      <span className="flex flex-wrap">
        <a className="text-blue-600 my-2 mx-4 underline">
          Démo : tim-2020.vercel.app
        </a>
        <a className="text-blue-600 my-2 mx-4 underline">
          Code : github.com/OlivierFortier
        </a>
      </span>
      <div className="grid max-w-screen-xl gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="pb-4 mb-4 border-b">
            <h3 className="mb-2 text-lg font-semibold text-blue-600 leading-5">
              Un sous-titre
            </h3>
            <p className="text-md text-blue-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam
              laborum ipsam incidunt numquam totam dicta, omnis molestiae quia
              repudiandae atque iusto vero saepe temporibus culpa. Nihil
              repellat inventore vel?
            </p>
          </div>
          <div className="pb-4 mb-4 border-b">
            <h3 className="mb-2 text-lg font-semibold text-blue-600 leading-5">
              Un autre sous-titre
            </h3>
            <p className="text-md text-blue-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam
              laborum ipsam incidunt numquam totam dicta, omnis molestiae quia
              repudiandae atque iusto vero saepe temporibus culpa. Nihil
              repellat inventore vel?
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-blue-600 leading-5">
              Stack technologique
            </h3>
            <ul className="text-md text-blue-500">
              <li className="ml-3"> - React</li>
              <li className="ml-3"> - Next.js</li>
              <li className="ml-3"> - TailwindCSS</li>
              <li className="ml-3"> - Typescript</li>
              <li className="ml-3"> - Headless CMS</li>
            </ul>
          </div>
        </div>
        <Link href="/projets">
          <a className="place-self-start cursor-pointer font-semibold text-blue-600 p-2 my-6 border-blue-600 border-2 rounded transition-colors hover:bg-blue-600 hover:text-white">
            {" "}
            {"<"} Retour aux projets
          </a>
        </Link>
      </div>
    </section>
  );
}
