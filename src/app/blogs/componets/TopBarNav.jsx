import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

// app/blog/components/TopBarNav.jsx
export default function TopBarNav() {
    return (
        <nav className="w-full py-4 bg-blue-800 shadow">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
                <nav>
                    <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                        <li><a className="hover:text-gray-200 hover:underline px-4" href="https://strongfreecode.com">StrongFreeCode</a></li>
                        <li><a className="hover:text-gray-200 hover:underline px-4" href="https://lashopy.strongfreecode.com">LaShopy</a></li>
                    </ul>
                </nav>
                <div className="flex items-center text-lg no-underline text-white pr-6">
                    <a className="" href="#">
                        <FaFacebook></FaFacebook>
                    </a>
                    <a className="pl-6" href="#">
                        <FaInstagram></FaInstagram>
                    </a>
                    <a className="pl-6" href="#">
                        <FaTwitter></FaTwitter>
                    </a>
                    <a className="pl-6" href="#">
                        <FaLinkedin></FaLinkedin>
                    </a>
                </div>
            </div>
        </nav>
    );
}