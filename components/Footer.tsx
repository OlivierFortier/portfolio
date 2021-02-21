import Link from 'next/link';
import {FaLinkedinIn} from 'react-icons/fa';
import {FiGithub, FiSend} from 'react-icons/fi';

export default function Footer() {
    return (
        <footer className="flex flex-col items-center">
            <hr className="h-1 w-10/12 bg-blue-600"/>
            <nav className=" flex flex-col md:w-full md:flex-row md:justify-around">
                <h3 className="text-center"><Link href="/"><a>Olivier Fortier 2021</a></Link></h3>
                <ul className="flex justify-around">
                    <li className="px-2"><Link href="/"><a><FaLinkedinIn/></a></Link></li>
                    <li className="px-2"><Link href="/"><a><FiGithub/></a></Link></li>
                    <li className="px-2"><Link href="/"><a><FiSend/></a></Link></li>
                </ul>
            </nav>
        </footer>
    )
}