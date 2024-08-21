// app/blog/page.jsx
'use client'
import Head from 'next/head';
import { useState } from 'react';
import TopBarNav from './components/TopBarNav';
import TextHeader from './components/TextHeader';
import TopicNav from './components/TopicNav';
import ActiveFilters from './components/ActiveFilters';
import MainContent from './components/MainContent';
import { articlesData, articlesPerPage, categories, getColor, tags } from './utils/ArticleList';



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
        setSelectedTags(prevTags => {
            if (prevTags.includes(tag)) {
                return prevTags.filter(t => t !== tag);
            } else {
                return [...prevTags, tag];
            }
        });
        setCurrentPage(1);
    };

    const handleTagRemove = (tag) => {
        setSelectedTags(prevTags => prevTags.filter(t => t !== tag));
        setCurrentPage(1)
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handleSubCategorySelect = (subCategory) => {
        setSelectedSubCategory(prevSubcategory => {
            if (prevSubcategory === subCategory) {
                return null;
            } else {
                return subCategory;
            }
        });
        setCurrentPage(1);
    };

    return (
        <div className="bg-white font-family-karla dark:bg-slate-600">
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