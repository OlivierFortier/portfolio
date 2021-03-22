import Link from "next/link";

// page d'erreur personnalisé au cas ou un utilisateur tente de naviguer vers une page inexistante
export default function Custom404() {
  return (
    <section className="flex items-center h-full p-16 text-blue-800 dark:text-blue-400">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-blue-400">
            <span className="sr-only">Erreur </span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-blue-600 dark:text-blue-400">
            Désolé, cette page n'existe pas
          </p>
          <p className="mt-4 mb-8">
            Mais ne vous inquiétez pas ! Vous pouvez tout retrouver sur la page
            d'accueil !
          </p>
          <Link href="/">
            <a className="px-4 py-4 font-semibold rounded bg-blue-600 text-blue-50">
              Retour à la page d'accueil
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
