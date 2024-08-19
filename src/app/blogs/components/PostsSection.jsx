// app/blog/components/PostsSection.jsx
import { useState } from 'react';
import Article from './Article';
import Pagination from './Pagination';

const postsPerPage = 3;

export default function PostsSection({ articles, tagColors }) {
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