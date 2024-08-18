// pages/index.js
'use client'
import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function BlogPage() {

    return (
        <div className="bg-white font-family-karla">
            <Head>
                <title>WONDERFULLTIME | BLOG</title>
                <meta name="description" content="Welcome to our blog" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <TopBarNav />
            <TextHeader />
            <TopicNav />
            <MainContent />

        </div>
    );
};

function TopBarNav() {
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

function TextHeader() {
    return (
        <header className="w-full container mx-auto">
            <div className="flex flex-col items-center py-12">
                <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-3xl md:text-5xl" href="#">
                    Wonderfulltime
                </a>
                <p className="md:text-lg text-gray-600 text-sm text-center">
                    Discover the latest news, articles, and trends in the world of technology, automotive, finance, and politics.
                </p>
            </div>
        </header>
    );
}

function TopicNav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full py-4 border-t border-b bg-gray-100">
            <div className="block sm:hidden">
                <a
                    href="#"
                    className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
                    onClick={() => setOpen(!open)}
                >
                    Topics <i className={`fas ml-2 ${open ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
                </a>
            </div>
            <div className={`${open ? 'block' : 'hidden'} w-full flex-grow sm:flex sm:items-center sm:w-auto`}>
                <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                    <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Technology</a>
                    <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Automotive</a>
                    <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Finance</a>
                    <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Politics</a>
                    <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Culture</a>
                    <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Sports</a>
                </div>
            </div>
        </nav>
    );
}

function MainContent() {
    return (
        <div className="container mx-auto flex flex-wrap py-6">
            <PostsSection />
            <SidebarSection />
        </div>
    );
}

function PostsSection() {
    return (
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
            <Article
                imageSrc="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                category="Technology"
                title="Lorem Ipsum Dolor Sit Amet Dolor Sit Amet"
                author="David Grzyb"
                date="April 25th, 2020"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna.."
            />
            <Article
                imageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                category="Automotive, Finance"
                title="Lorem Ipsum Dolor Sit Amet Dolor Sit Amet"
                author="David Grzyb"
                date="January 12th, 2020"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna.."
            />
            <Article
                imageSrc="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                category="Sports"
                title="Lorem Ipsum Dolor Sit Amet Dolor Sit Amet"
                author="David Grzyb"
                date="October 22nd, 2019"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna.."
            />
            <Pagination />
        </section>
    );
}

function Article({ imageSrc, category, title, author, date, content }) {
    return (
        <article className="flex flex-col shadow my-4">
            <a href="#" className="hover:opacity-75">
                <Image src={imageSrc} alt={title} width={1000} height={500} />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
                <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">{category}</a>
                <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">{title}</a>
                <p href="#" className="text-sm pb-3">
                    By <a href="#" className="font-semibold hover:text-gray-800">{author}</a>, Published on {date}
                </p>
                <a href="#" className="pb-6">{content}</a>
                <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
            </div>
        </article>
    );
}

function Pagination() {
    return (
        <div className="flex items-center py-8">
            <a href="#" className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
            <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
            <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i className="fas fa-arrow-right ml-2"></i></a>
        </div>
    );
}

function SidebarSection() {
    return (
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
            <AboutUs />
            <CategoriesDropdown />
            <Tags />
            <Instagram />
        </aside>
    );
}

function AboutUs() {
    return (
        <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">About Us</p>
            <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
            <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                Get to know us
            </a>
        </div>
    );
}

function CategoriesDropdown() {
    const [open, setOpen] = useState(false);
    const categories = [
        { name: 'Technology', subcategories: ['Gadgets', 'AI', 'Software'] },
        { name: 'Automotive', subcategories: ['Cars', 'Bikes', 'Trucks'] },
        { name: 'Finance', subcategories: ['Stocks', 'Cryptocurrency', 'Banking'] },
    ];

    return (
        <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">Categories</p>
            <div className="relative">
                <button onClick={() => setOpen(!open)} className="w-full text-left py-2 px-4 rounded bg-gray-100 hover:bg-gray-200 focus:outline-none">
                    Select Category <i className={`fas ml-2 ${open ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </button>
                {open && (
                    <div className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded">
                        {categories.map((category, index) => (
                            <div key={index} className="py-1">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{category.name}</a>
                                {category.subcategories.map((subcategory, subIndex) => (
                                    <a key={subIndex} href="#" className="block px-8 py-2 text-sm text-gray-500 hover:bg-gray-100">{subcategory}</a>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function Tags() {
    const tags = ['Technology', 'Automotive', 'Finance', 'Politics', 'Culture', 'Sports'];
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];

    return (
        <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">Tags</p>
            <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                    <a key={index} href="#" className={`mr-2 mb-2 px-3 py-1 text-sm text-white rounded hover:opacity-75 ${colors[index % colors.length]}`}>{tag}</a>
                ))}
            </div>
        </div>
    );
}

function Instagram() {
    return (
        <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">Instagram</p>
            <div className="grid grid-cols-3 gap-3">
                <Image className="hover:opacity-75" src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Instagram 1" width={150} height={150} />
                <Image className="hover:opacity-75" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Instagram 2" width={150} height={150} />
                <Image className="hover:opacity-75" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Instagram 3" width={150} height={150} />
                <Image className="hover:opacity-75" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Instagram 4" width={150} height={150} />
                <Image className="hover:opacity-75" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Instagram 5" width={150} height={150} />
                <Image className="hover:opacity-75" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Instagram 6" width={150} height={150} />
                <Image className="hover:opacity-75" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Instagram 7" width={150} height={150} />
                <Image className="hover:opacity-75" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Instagram 8" width={150} height={150} />
                <Image className="hover:opacity-75" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Instagram 9" width={150} height={150} />
            </div>
            <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
                <i className="fab fa-instagram mr-2"></i> Follow @dgrzyb
            </a>
        </div>
    );
}