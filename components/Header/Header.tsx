import Link from 'next/link';
import {SiGravatar} from 'react-icons/si';
import {IoMenu} from 'react-icons/io5';

export default function Header() {
    return (
        <header id="Header">
            <nav className="flex justify-between items-center px-2">
                <span className="text-5xl"><Link href="/"><a><SiGravatar/></a></Link></span>

                <ul className="hidden md:flex">
                    <li><Link href="/"><a>Accueil</a></Link></li>
                    <li><Link href="/"><a>Projets</a></Link></li>
                    <li><Link href="/"><a>À propos</a></Link></li>
                    <li><Link href="/"><a>Contact</a></Link></li>
                </ul>

                <details className="list-none md:hidden">
                    <summary className="relative z-10 list-none text-7xl">
                       <IoMenu/>
                    </summary>
                    <ul className="absolute top-0 left-0 flex flex-col h-screen w-screen bg-blue-300 justify-center items-center space-y-7 text-4xl">
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
