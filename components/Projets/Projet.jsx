import Image from "next/image";
import Link from 'next/link';

export default function Projet() {
  return (
    <li className="py-4 md:p-4 lg:w-1/2 md:w-full">
      <Link href="/projets/test">
        <article className="cursor-pointer">
          <div className="flex items-center  rounded-lg shadow-md transition-shadow hover:shadow-xl p-8 md:flex-row lg:flex-col xl:flex-row flex-col">
            <div className="h-40 w-full md:w-1/2 lg:w-full xl:w-1/2 sm:mr-8 sm:mb-0 inline-flex mx-auto  justify-center rounded text-indigo-500 flex-shrink-0">
              
              {/* TODO : travailler sur la taille de l'image de preview */}

              <Image className="object-cover rounded-md" src="/assets/diego_unsplash.jpg" width={400} height={600} />
            </div>
            <div className="flex-grow">
              <h2 className="text-blue-600 text-xl title-font font-bold mb-3 mt-3 xl:mt-0">
                Un projet
              </h2>
              <p className="leading-relaxed text-base text-blue-500">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a className="font-semibold text-lg mt-3 text-blue-600 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
}
