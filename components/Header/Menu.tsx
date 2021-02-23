import Link from 'next/link'

export default function Menu({fermerMenu}) {
  return (
    <ul onClick={fermerMenu} className="absolute top-0 left-0 flex flex-col h-screen w-screen bg-blue-300 justify-center items-center space-y-7 text-4xl">
      <li>
        <Link href="/">
          <a>Accueil</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Projets</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>À propos</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  );
}
