// app/blog/components/PostsSection.jsx
import { useState } from 'react';
import Article from './Article';
import Pagination from './Pagination';

export default function PostsSection({ articles, tagColors, currentPage, onPageChange, articlesPerPage }) {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const visibleArticles = articles.slice(startIndex, startIndex + articlesPerPage);

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
                totalPages={Math.ceil(articles.length / articlesPerPage)}
                onPageChange={onPageChange}
            />
        </section>
    );
}