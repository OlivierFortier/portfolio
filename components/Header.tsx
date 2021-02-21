import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav className="flex justify-between">
                <span><Link href="/">logo</Link></span>

                <ul className="flex">
                    <li><Link href="/"><a>Accueil</a></Link></li>
                    <li><Link href="/"><a>Projets</a></Link></li>
                    <li><Link href="/"><a>À propos</a></Link></li>
                    <li><Link href="/"><a>Contact</a></Link></li>
                </ul>
            </nav>
        </header>
    )
}
