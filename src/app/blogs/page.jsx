// pages/index.js
'use client'
import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const categories = [
    { name: 'Travel', subcategories: ["Popular Destinations", "Hidden Gems", "Off the Beaten Path", "Adventure Travel", "Luxury Travel", "Budget Travel"] },
    { name: 'Technology', subcategories: ['Gadgets', 'AI', 'Software'] },
    { name: 'Automotive', subcategories: ['Cars', 'Bikes', 'Trucks'] },
    { name: 'Finance', subcategories: ['Stocks', 'Cryptocurrency', 'Banking'] },
    { name: 'Politics', subcategories: ['International', 'National', 'Local'] },
    { name: 'Culture', subcategories: ['Arts', 'Music', 'Film'] },
    { name: 'Sports', subcategories: ['Football', 'Basketball', 'Tennis'] },
];

const tags = [
    'Havana', 'History', 'Beaches', 'Varadero', 'Nature', 'Viñales', 'Caribbean', 'Cayo Coco',
    'Culture', 'Santiago de Cuba', 'Gardens', 'Soroa', 'Island', 'Cayo Levisa', 'Waterfalls',
    'El Yunque', 'Colonial', 'Trinidad', 'Bay', 'Pigs'
];


function getColor(index, totalTags) {
    const baseHue = index * (360 / totalTags);
    const colors = [
        `hsl(${baseHue % 360}, 70%, 60%)`,
        `hsl(${(baseHue + 120) % 360}, 70%, 60%)`,
        `hsl(${(baseHue + 240) % 360}, 70%, 60%)`,
        `hsl(${(baseHue + 180) % 360}, 70%, 60%)`
    ];
    return colors[index % 4];
}
const articlesData = [
    {
        imageSrc: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        category: "Travel",
        subcategory: "Popular Destinations",
        title: "Exploring the Historic Streets of Old Havana",
        author: "Ana Gomez",
        date: "May 10th, 2023",
        content: "Old Havana, with its colorful buildings and vintage cars, offers a glimpse into Cuba's rich history. The city's five plazas are a must-visit for anyone interested in architecture and culture.",
        tags: ['Havana', 'History']
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        category: "Travel",
        subcategory: "Hidden Gems",
        title: "Tranquil Beaches of Varadero: A Paradise on Earth",
        author: "Luis Rodriguez",
        date: "June 15th, 2023",
        content: "Varadero's pristine beaches and clear turquoise waters make it a top destination for beach lovers. The area offers a mix of relaxation and adventure with various water sports available.",
        tags: ['Beaches', 'Varadero']
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        category: "Travel",
        subcategory: "Off the Beaten Path",
        title: "Viñales Valley: Where Nature and Culture Thrive",
        author: "Maria Lopez",
        date: "July 20th, 2023",
        content: "The Viñales Valley, with its dramatic limestone cliffs and lush tobacco fields, is a UNESCO World Heritage site. It's a perfect place for hiking, cycling, and learning about Cuban agriculture.",
        tags: ['Nature', 'Viñales']
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        category: "Travel",
        subcategory: "Adventure Travel",
        title: "Cayo Coco: A Hidden Gem in the Caribbean",
        author: "Carlos Sanchez",
        date: "August 5th, 2023",
        content: "Cayo Coco, known for its stunning coral reefs and white sandy beaches, is a paradise for snorkeling and diving enthusiasts. The island's natural beauty is truly captivating.",
        tags: ['Caribbean', 'Cayo Coco']
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        category: "Travel",
        subcategory: "Luxury Travel",
        title: "Santiago de Cuba: The Soul of the Caribbean",
        author: "Elena Martinez",
        date: "September 10th, 2023",
        content: "Santiago de Cuba, with its vibrant music scene and colonial architecture, is a city that pulses with energy. It's a great place to experience Cuban culture and history firsthand.",
        tags: ['Culture', 'Santiago de Cuba']
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        category: "Travel",
        subcategory: "Budget Travel",
        title: "The Enchanting Gardens of Soroa",
        author: "Fernando Diaz",
        date: "October 15th, 2023",
        content: "Soroa, known as the 'Rainbow of Cuba', is home to a breathtaking botanical garden. The orchid garden is a particular highlight, offering a serene escape into nature's beauty.",
        tags: ['Gardens', 'Soroa']
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        category: "Travel",
        subcategory: "Popular Destinations",
        title: "Cayo Levisa: A Private Island Escape",
        author: "Isabel Perez",
        date: "November 20th, 2023",
        content: "Cayo Levisa, accessible only by boat, offers a secluded beach experience. The island's clear waters are perfect for snorkeling and diving, revealing a vibrant underwater world.",
        tags: ['Island', 'Cayo Levisa']
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        category: "Travel",
        subcategory: "Hidden Gems",
        title: "The Majestic El Yunque Waterfall",
        author: "Jorge Hernandez",
        date: "December 5th, 2023",
        content: "El Yunque, located in the Sierra del Rosario, is a stunning waterfall surrounded by lush vegetation. It's a perfect spot for a refreshing swim and a picnic with nature.",
        tags: ['Waterfalls', 'El Yunque']
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        category: "Travel",
        subcategory: "Off the Beaten Path",
        title: "Trinidad: A Living Museum of Colonial Architecture",
        author: "Laura Gomez",
        date: "January 10th, 2024",
        content: "Trinidad, a UNESCO World Heritage site, is a beautifully preserved colonial town. Its cobblestone streets and colorful buildings transport visitors back in time.",
        tags: ['Colonial', 'Trinidad']
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        category: "Travel",
        subcategory: "Adventure Travel",
        title: "The Breathtaking Bay of Pigs",
        author: "Miguel Torres",
        date: "February 15th, 2024",
        content: "The Bay of Pigs, known for its crystal-clear waters and rich marine life, is a paradise for snorkeling and scuba diving. The area also offers a fascinating historical context.",
        tags: ['Bay', 'Pigs']
    }
];

const postsPerPage = 3;

export default function BlogPage() {
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    const tagColors = tags.reduce((acc, tag, index) => {
        acc[tag] = getColor(index, tags.length);
        return acc;
    }, {});

    const filteredArticles = articlesData.filter(article => {
        const matchesTag = selectedTags.length === 0 || selectedTags.every(tag => article.tags.includes(tag));
        const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
        const matchesSubCategory = selectedSubCategory ? article.subcategory === selectedSubCategory : true;
        return matchesTag && matchesCategory && matchesSubCategory;
    });

    const handleTagSelect = (tag) => {
        setSelectedTags(prevTags => [...prevTags, tag]);
    };

    const handleTagRemove = (tag) => {
        setSelectedTags(prevTags => prevTags.filter(t => t !== tag));
    };

    return (
        <div className="bg-white font-family-karla">
            <Head>
                <title>WONDERFULLTIME | BLOG</title>
                <meta name="description" content="Welcome to our blog" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <TopBarNav />
            <TextHeader />
            <TopicNav categories={categories} onCategorySelect={setSelectedCategory} />
            <ActiveFilters
                selectedTags={selectedTags}
                selectedCategory={selectedCategory}
                selectedSubCategory={selectedSubCategory}
                onRemoveTag={handleTagRemove}
                onRemoveCategory={() => setSelectedCategory(null)}
                onRemoveSubCategory={() => setSelectedSubCategory(null)}
                tagColors={tagColors}
            />
            <MainContent
                articles={filteredArticles}
                tagColors={tagColors}
                selectedTags={selectedTags}
                onTagSelect={handleTagSelect}
                categories={categories}
                onSubCategorySelect={setSelectedSubCategory}
            />
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

function TopicNav({ categories, onCategorySelect }) {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full py-4 border-t border-b bg-gray-100">
            <div className="block sm:hidden">
                <a
                    href="#"
                    className="md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
                    onClick={() => setOpen(!open)}
                >
                    Topics <i className={`fas ml-2 ${open ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
                </a>
            </div>
            <div className={`${open ? 'block' : 'hidden'} w-full flex-grow sm:flex sm:items-center sm:w-auto`}>
                <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                    {categories.map((category, index) => (
                        <a key={index} href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2" onClick={() => onCategorySelect(category.name)}>
                            {category.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

function MainContent({ articles, tagColors, selectedTags, onTagSelect, categories, onSubCategorySelect }) {
    return (
        <div className="container mx-auto flex flex-wrap py-6">
            <PostsSection articles={articles} tagColors={tagColors} />
            <SidebarSection categories={categories} tags={tags} tagColors={tagColors} selectedTags={selectedTags} onTagSelect={onTagSelect} onSubCategorySelect={onSubCategorySelect} />
        </div>
    );
}
function PostsSection({ articles, tagColors }) {
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * postsPerPage;
    const visibleArticles = articles.slice(startIndex, startIndex + postsPerPage);

    return (
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
            {visibleArticles.length > 0 ? (
                visibleArticles.map((article, index) => (
                    <Article
                        key={index}
                        imageSrc={article.imageSrc}
                        category={article.category}
                        subcategory={article.subcategory}
                        title={article.title}
                        author={article.author}
                        date={article.date}
                        content={article.content}
                        tags={article.tags}
                        tagColors={tagColors}
                    />
                ))
            ) : (
                <p>No articles found.</p>
            )}
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(articles.length / postsPerPage)}
                onPageChange={setCurrentPage}
            />
        </section>
    );
}

function Article({ imageSrc, category, subcategory, title, author, date, content, tags, tagColors }) {
    return (
        <article className="flex flex-col shadow-md my-4 shadow-slate-400">
            <a href="#" className="hover:opacity-75">
                <Image src={imageSrc} alt={title} width={768} height={90} className='w-full max-h-48 object-cover object-center rounded-t-lg' />
            </a>
            <div className="bg-white flex hover:bg-slate-100 flex-col justify-start p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <span className="text-blue-700 text-base md:text-lg font-extrabold uppercase pb-4">{category}</span>
                    <span className="text-gray-600 text-xs font-bold uppercase bg-orange-300 rounded-full px-2 py-1 inline-block">{subcategory}</span>
                </div>
                <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">{title}</a>
                <p href="#" className="text-sm pb-3">
                    By <a href="#" className="font-semibold hover:text-gray-800">{author}</a>, Published on {date}
                </p>
                <a href="#" className="pb-6">{content}</a>
                <div className="flex flex-wrap pb-6">
                    {tags.map((tag, index) => (
                        <a key={index} href="#" className="mr-2 mb-2 px-3 py-1 text-sm text-white rounded hover:opacity-75" style={{ backgroundColor: tagColors[tag] }}>
                            {tag}
                        </a>
                    ))}
                </div>
                <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
            </div>
        </article>
    );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
    const maxPagesToShow = 5; // Número máximo de páginas a mostrar a la vez
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);

    let startPage = Math.max(currentPage - halfMaxPagesToShow, 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    if (endPage - startPage < maxPagesToShow - 1) {
        startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    return (
        <div className="flex items-center justify-center py-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 text-gray-800 hover:text-white mr-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <FaChevronLeft className="text-sm" />
            </button>
            {startPage > 1 && (
                <button
                    onClick={() => onPageChange(1)}
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white mx-1"
                >
                    1
                </button>
            )}
            {startPage > 2 && (
                <span className="mx-1">...</span>
            )}
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`h-10 w-10 flex items-center justify-center rounded-full ${page === currentPage ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white'} mx-1`}
                >
                    {page}
                </button>
            ))}
            {endPage < totalPages - 1 && (
                <span className="mx-1">...</span>
            )}
            {endPage < totalPages && (
                <button
                    onClick={() => onPageChange(totalPages)}
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white mx-1"
                >
                    {totalPages}
                </button>
            )}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 text-gray-800 hover:text-white ml-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <FaChevronRight className="text-sm" />
            </button>
        </div>
    );
}

function SidebarSection({ categories, tags, tagColors, selectedTags, onTagSelect, onSubCategorySelect }) {
    return (
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
            <AboutUs />
            <SubCategoriesDropdown categories={categories} onSubCategorySelect={onSubCategorySelect} />
            <Tags tags={tags} tagColors={tagColors} selectedTags={selectedTags} onTagSelect={onTagSelect} />
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

function SubCategoriesDropdown({ categories, onSubCategorySelect }) {
    const [open, setOpen] = useState(false);
    const [subOpen, setSubOpen] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    const toggleSubCategory = (categoryIndex) => {
        setSubOpen({
            ...subOpen,
            [categoryIndex]: !subOpen[categoryIndex]
        });
    };

    const selectSubCategory = (category, subcategory) => {
        setSelectedCategory(category);
        setSelectedSubCategory(subcategory);
        onSubCategorySelect(subcategory);
        setOpen(false); // Close the dropdown after selecting a sub-category
    };

    return (
        <div className="w-full bg-white shadow flex flex-col my-4 p-6 rounded-lg">
            <p className="text-xl font-semibold pb-5">SubCategories</p>
            <div className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    className="w-full text-left py-3 px-4 rounded bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
                >
                    <span>
                        {selectedCategory ? `${selectedCategory.name}${selectedSubCategory ? ` > ${selectedSubCategory}` : ''}` : 'Select Category'}
                    </span>
                    <i className={`fas ml-2 ${open ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </button>
                {open && (
                    <div className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-lg overflow-hidden">
                        {categories.map((category, index) => (
                            <div key={index} className="py-1">
                                <button
                                    onClick={() => toggleSubCategory(index)}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center"
                                >
                                    <span>{category.name}</span>
                                    {category.subcategories.length > 0 && (
                                        <i className={`fas ml-2 ${subOpen[index] ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                    )}
                                </button>
                                {subOpen[index] && category.subcategories.map((subcategory, subIndex) => (
                                    <button
                                        key={subIndex}
                                        onClick={() => selectSubCategory(category, subcategory)}
                                        className="block w-full text-left px-8 py-2 text-sm text-gray-500 hover:bg-gray-100"
                                    >
                                        {subcategory}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function Tags({ tags, tagColors, selectedTags, onTagSelect }) {
    const [showAllTags, setShowAllTags] = useState(false);

    const visibleTags = showAllTags ? tags : tags.slice(0, 15);
    const remainingTagsCount = tags.length - visibleTags.length;

    return (
        <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">Tags</p>
            <div className="flex flex-wrap">
                {visibleTags.map((tag, index) => (
                    <button
                        key={index}
                        className={`mr-2 mb-2 px-3 py-1 text-sm text-white rounded hover:opacity-75 ${selectedTags.includes(tag) ? 'opacity-75' : ''}`}
                        style={{ backgroundColor: tagColors[tag] }}
                        onClick={() => onTagSelect(tag)}
                    >
                        {tag}
                    </button>
                ))}
                {(remainingTagsCount > 0 || showAllTags) && (
                    <button
                        className="mr-2 mb-2 px-3 py-1 text-sm text-white bg-gray-500 rounded hover:opacity-75"
                        onClick={() => setShowAllTags(!showAllTags)}
                    >
                        {showAllTags ? 'Show less' : `+${remainingTagsCount} more`}
                    </button>
                )}
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

function ActiveFilters({ selectedTags, selectedCategory, selectedSubCategory, onRemoveTag, onRemoveCategory, onRemoveSubCategory, tagColors }) {
    return (
        <div className="flex items-center justify-center my-4">
            {selectedCategory && (
                <span className="px-3 py-1 mr-2 text-sm text-white bg-blue-800 rounded hover:bg-blue-700">
                    {selectedCategory}
                    <button onClick={onRemoveCategory} className="ml-2 text-white hover:text-gray-200">
                        &times;
                    </button>
                </span>
            )}
            {selectedSubCategory && (
                <span className="px-3 py-1 mr-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-500">
                    {selectedSubCategory}
                    <button onClick={onRemoveSubCategory} className="ml-2 text-white hover:text-gray-200">
                        &times;
                    </button>
                </span>
            )}
            {selectedTags.map((tag, index) => (
                <span key={index} className="px-3 py-1 mr-2 text-sm text-white rounded hover:opacity-75" style={{ backgroundColor: tagColors[tag] }}>
                    {tag}
                    <button onClick={() => onRemoveTag(tag)} className="ml-2 text-white hover:text-gray-200">
                        &times;
                    </button>
                </span>
            ))}
        </div>
    );
}