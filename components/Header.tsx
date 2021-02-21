import Link from 'next/link';

export default function Header() {
    return (
        <header id="Header">
            <nav className="flex justify-between">
                <span><Link href="/"><a>logo</a></Link></span>

                {/* <ul className="flex">
                    <li><Link href="/"><a>Accueil</a></Link></li>
                    <li><Link href="/"><a>Projets</a></Link></li>
                    <li><Link href="/"><a>À propos</a></Link></li>
                    <li><Link href="/"><a>Contact</a></Link></li>
                </ul> */}

                <details className="list-none">
                    <summary className="list-none">
                       <i>burger</i>
                    </summary>
                    <ul className="flex flex-col">
                    <li><Link href="/"><a>Accueil</a></Link></li>
                    <li><Link href="/"><a>Projets</a></Link></li>
                    <li><Link href="/"><a>À propos</a></Link></li>
                    <li><Link href="/"><a>Contact</a></Link></li>
                </ul> 
                </details>
            </nav>
        </header>
    )
}
