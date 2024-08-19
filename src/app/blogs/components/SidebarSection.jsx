// app/blog/components/SidebarSection.jsx
import AboutUs from './AboutUs';
import SubCategoriesDropdown from './SubCategoriesDropdown';
import Tags from './Tags';
import Instagram from './Instagram';

export default function SidebarSection({ categories, tags, tagColors, selectedTags, onTagSelect, onSubCategorySelect }) {
    return (
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
            <AboutUs />
            <SubCategoriesDropdown categories={categories} onSubCategorySelect={onSubCategorySelect} />
            <Tags tags={tags} tagColors={tagColors} selectedTags={selectedTags} onTagSelect={onTagSelect} />
            <Instagram />
        </aside>
    );
}