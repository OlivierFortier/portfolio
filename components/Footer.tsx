import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="flex flex-col items-center">
            <hr className="h-1 w-10/12 bg-blue-600"/>
            <nav className="flex flex-col">
                <h3 className="text-center"><Link href="/"><a>Olivier Fortier 2021</a></Link></h3>
                <ul className="flex justify-around">
                    <li className="px-2"><Link href="/"><a>LinkedIn</a></Link></li>
                    <li className="px-2"><Link href="/"><a>GitHub</a></Link></li>
                    <li className="px-2"><Link href="/"><a>Email</a></Link></li>
                </ul>
            </nav>
        </footer>
    )
}
