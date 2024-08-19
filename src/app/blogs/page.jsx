// app/blog/page.jsx
'use client'
import Head from 'next/head';
import { useState } from 'react';
import TopBarNav from './components/TopBarNav';
import TextHeader from './components/TextHeader';
import TopicNav from './components/TopicNav';
import ActiveFilters from './components/ActiveFilters';
import MainContent from './components/MainContent';

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
const articlesPerPage = 3;

export default function BlogPage() {
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);


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
        setCurrentPage(1)
    };

    const handleTagRemove = (tag) => {
        setSelectedTags(prevTags => prevTags.filter(t => t !== tag));
        setCurrentPage(1)
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Resetear la página al seleccionar una categoría
    };

    const handleSubCategorySelect = (subCategory) => {
        setSelectedSubCategory(subCategory);
        setCurrentPage(1); // Resetear la página al seleccionar una subcategoría
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
            <TopicNav categories={categories} onCategorySelect={handleCategorySelect} />
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
                tags={tags}
                onSubCategorySelect={handleSubCategorySelect}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                articlesPerPage={articlesPerPage}
            />
        </div>
    );
};