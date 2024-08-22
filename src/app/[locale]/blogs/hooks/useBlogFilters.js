
'use client'
import { useState } from "react";
import { tags, categories, getColor, articlesData, articlesPerPage } from "../utils/ArticleList.js"


export default function useBlogFilters() {
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
        setCurrentPage(1);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handleSubCategorySelect = (subCategory) => {
        setSelectedSubCategory(subCategory);
        setCurrentPage(1);
    };

    return {
        handleTagSelect,
        handleTagRemove,
        handleCategorySelect,
        handleSubCategorySelect,
        selectedTags,
        selectedCategory,
        selectedSubCategory,
        filteredArticles,
        tagColors,
        currentPage,
        setCurrentPage,
        articlesPerPage,
        setSelectedCategory,
        setSelectedSubCategory,
        tags,
        categories,
    };
}

