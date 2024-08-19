// components/ArticleList.js

import React from 'react';
import Image from 'next/image';

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomTags(tags, count) {
    let selectedTags = new Set();
    while (selectedTags.size < count) {
        selectedTags.add(getRandomElement(tags));
    }
    return Array.from(selectedTags);
}

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
    'El Yunque', 'Colonial', 'Trinidad', 'Bay', 'Pigs', 'AI', 'Software', 'Gadgets', 'Cars',
    'Bikes', 'Trucks', 'Stocks', 'Cryptocurrency', 'Banking', 'International', 'National', 'Local',
    'Arts', 'Music', 'Film', 'Football', 'Basketball', 'Tennis'
];

const authors = ['Ana Gomez', 'Luis Rodriguez', 'Maria Lopez', 'Carlos Sanchez', 'Elena Martinez', 'Fernando Diaz', 'Isabel Perez', 'Jorge Hernandez', 'Laura Gomez', 'Miguel Torres'];

const titles = [
    "Exploring the Future of AI in Everyday Life", "The Latest Innovations in Gadget Technology",
    "Cryptocurrency: Understanding the Risks and Rewards", "National Politics: A Year in Review",
    "The Cultural Impact of Music in Society", "The Evolution of Modern Film", "Cars of the Future",
    "The Role of Banking in Global Finance", "Off-the-Beaten-Path Adventures", "Luxury Travel Destinations for 2024",
    "The Hidden Gems of International Travel", "Budget Travel: How to Save Money on Your Next Trip",
    "The Best Beaches Around the World", "Exploring Historical Sites in Havana", "The Nature of Viñales",
    "Gadgets for the Modern Home", "Software Solutions for Small Businesses", "AI in the Automotive Industry",
    "Trucks for Tough Terrain", "The Hidden Beauty of Soroa", "Colonial Architecture in Trinidad",
    "Adventure Sports in the Caribbean", "Waterfalls to Visit in 2024", "Football: The Global Game",
    "Basketball: From Street to Elite", "Tennis: The Grand Slam Challenge"
];

function generateArticles() {
    const articles = [];

    for (let i = 0; i < 100; i++) {
        const category = getRandomElement(categories);
        const subcategory = getRandomElement(category.subcategories);
        const title = getRandomElement(titles);
        const author = getRandomElement(authors);
        const date = new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toDateString();
        const content = `${title} is an article that delves into ${subcategory.toLowerCase()} within the ${category.name.toLowerCase()} category. The author, ${author}, explores various aspects of this topic.`;
        const articleTags = getRandomTags(tags, Math.floor(Math.random() * 4) + 2);
        const imageSrc = "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80";

        articles.push({
            imageSrc,
            category: category.name,
            subcategory,
            title,
            author,
            date,
            content,
            tags: articleTags
        });
    }

    return articles;
}

const ArticleList = () => {
    const articles = generateArticles();

    return (
        <div className="container mx-auto flex flex-wrap py-6">
            <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                {articles.map((article, index) => (
                    <article key={index} className="flex flex-col shadow my-4">
                        <a href="#" className="hover:opacity-75">
                            <Image src={article.imageSrc} alt={article.title} width={768} height={400} />
                        </a>
                        <div className="bg-white flex flex-col justify-start p-6">
                            <span className="text-blue-700 text-sm font-bold uppercase pb-4">{article.category}</span>
                            <span className="text-gray-600 text-sm pb-3">{article.subcategory}</span>
                            <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">{article.title}</a>
                            <p href="#" className="text-sm pb-3">
                                By <a href="#" className="font-semibold hover:text-gray-800">{article.author}</a>, Published on {article.date}
                            </p>
                            <a href="#" className="pb-6">{article.content}</a>
                            <div className="flex flex-wrap pb-6">
                                {article.tags.map((tag, tagIndex) => (
                                    <a key={tagIndex} href="#" className="mr-2 mb-2 px-3 py-1 text-sm text-white bg-blue-800 rounded hover:bg-blue-700">
                                        {tag}
                                    </a>
                                ))}
                            </div>
                            <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default ArticleList;