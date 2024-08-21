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

export function calculateTimeRead(texto, velocidadLectura = 200) {
    const palabras = texto.split(/\s+/).length;
    const tiempoLectura = palabras / velocidadLectura;

    if (tiempoLectura < 1) {

        return `${Math.round(tiempoLectura * 60)} sec`;
    } else {

        return `${tiempoLectura.toFixed(2)} min`;
    }

}

export const articlesPerPage = 3;

export const articlesData = [
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

export const categories = [
    { name: 'Travel', subcategories: ["Popular Destinations", "Hidden Gems", "Off the Beaten Path", "Adventure Travel", "Luxury Travel", "Budget Travel"] },
    { name: 'Technology', subcategories: ['Gadgets', 'AI', 'Software'] },
    { name: 'Automotive', subcategories: ['Cars', 'Bikes', 'Trucks'] },
    { name: 'Finance', subcategories: ['Stocks', 'Cryptocurrency', 'Banking'] },
    { name: 'Politics', subcategories: ['International', 'National', 'Local'] },
    { name: 'Culture', subcategories: ['Arts', 'Music', 'Film'] },
    { name: 'Sports', subcategories: ['Football', 'Basketball', 'Tennis'] },
];

export const tags = [
    'Havana', 'History', 'Beaches', 'Varadero', 'Nature', 'Viñales', 'Caribbean', 'Cayo Coco',
    'Culture', 'Santiago de Cuba', 'Gardens', 'Soroa', 'Island', 'Cayo Levisa', 'Waterfalls',
    'El Yunque', 'Colonial', 'Trinidad', 'Bay', 'Pigs', 'AI', 'Software', 'Gadgets', 'Cars',
    'Bikes', 'Trucks', 'Stocks', 'Cryptocurrency', 'Banking', 'International', 'National', 'Local',
    'Arts', 'Music', 'Film', 'Football', 'Basketball', 'Tennis'
];

export const authors = ['Ana Gomez', 'Luis Rodriguez', 'Maria Lopez', 'Carlos Sanchez', 'Elena Martinez', 'Fernando Diaz', 'Isabel Perez', 'Jorge Hernandez', 'Laura Gomez', 'Miguel Torres'];

export const titles = [
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

export function getColor(index, totalTags) {
    const baseHue = index * (360 / totalTags);
    const colors = [
        `hsl(${baseHue % 360}, 70%, 60%)`,
        `hsl(${(baseHue + 120) % 360}, 70%, 60%)`,
        `hsl(${(baseHue + 240) % 360}, 70%, 60%)`,
        `hsl(${(baseHue + 180) % 360}, 70%, 60%)`
    ];
    return colors[index % 4];
}

export function generateArticles() {
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