import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="flex flex-col items-center">
            <hr className="h-1 w-10/12 bg-blue-600"/>
            <nav className="flex flex-col">
                <h3 className="text-center">Olivier Fortier 2021</h3>
                <ul className="flex justify-around">
                    <li className="px-2">LinkedIn</li>
                    <li className="px-2">GitHub</li>
                    <li className="px-2">Email</li>
                </ul>
            </nav>
        </footer>
    )
}
