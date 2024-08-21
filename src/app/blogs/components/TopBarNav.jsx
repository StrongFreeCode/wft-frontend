import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

// app/blog/components/TopBarNav.jsx
export default function TopBarNav() {
    return (
        <nav className="w-full py-4 bg-blue-800 shadow">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
                <nav className="w-full md:w-auto">
                    <ul className="flex flex-col items-center justify-center font-bold text-sm text-white uppercase no-underline md:flex-row">
                        <li><a className="hover:text-gray-200 hover:underline px-4 py-2 md:py-0" href="https://strongfreecode.com">StrongFreeCode</a></li>
                        <li><a className="hover:text-gray-200 hover:underline px-4 py-2 md:py-0" href="https://lashopy.strongfreecode.com">LaShopy</a></li>
                    </ul>
                </nav>
                <div className="flex items-center text-lg no-underline text-white mt-4 md:mt-0 justify-center md:justify-end w-full md:w-auto">
                    <a className="" href="#">
                        <FaFacebook />
                    </a>
                    <a className="pl-6" href="#">
                        <FaInstagram />
                    </a>
                    <a className="pl-6" href="#">
                        <FaTwitter />
                    </a>
                    <a className="pl-6" href="#">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </nav>
    );
}