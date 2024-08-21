// app/blog/components/MainContent.jsx
import PostsSection from './PostsSection';
import SidebarSection from './SidebarSection';

export default function MainContent({ articles, tagColors, selectedTags, onTagSelect, categories, onSubCategorySelect, tags, currentPage, onPageChange, articlesPerPage }) {
    return (
        <div className="container mx-auto flex flex-wrap py-6 ">
            <PostsSection articles={articles} tagColors={tagColors} currentPage={currentPage} onTagSelect={onTagSelect}
                onPageChange={onPageChange} onSubCategorySelect={onSubCategorySelect}
                articlesPerPage={articlesPerPage} />
            <SidebarSection categories={categories} tags={tags} tagColors={tagColors} selectedTags={selectedTags} onTagSelect={onTagSelect} onSubCategorySelect={onSubCategorySelect} />
        </div>
    );
}