import Image from "next/image";

export default function Projet() {
  return (
    <li className="p-4 lg:w-1/2 md:w-full">
      <article >
        <div className="flex  rounded-lg shadow-xl p-8 sm:flex-row flex-col">
          <div className="w-48 h-full sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded text-indigo-500 flex-shrink-0">
            <Image src="/assets/img-placeholder.png" width={165} height={165} />
          </div>
          <div className="flex-grow">
            <h2 className="text-blue-600 text-xl title-font font-medium mb-3">
              Un projet
            </h2>
            <p className="leading-relaxed text-base text-blue-500">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine.
            </p>
            <a className="text-lg mt-3 text-blue-600 inline-flex items-center">
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
    </li>
  );
}
