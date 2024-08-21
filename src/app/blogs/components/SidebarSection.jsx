
import SubCategoriesDropdown from './SubCategoriesDropdown';
import Tags from './Tags';
import Instagram from './Instagram';
import Newsletter from './Newsletter';

export default function SidebarSection({ categories, tags, tagColors, selectedTags, onTagSelect, onSubCategorySelect }) {
    return (
        <aside className="w-full md:w-1/3 flex flex-col  items-center px-3">
            <Newsletter />
            <SubCategoriesDropdown categories={categories} onSubCategorySelect={onSubCategorySelect} />
            <Tags tags={tags} tagColors={tagColors} selectedTags={selectedTags} onTagSelect={onTagSelect} />
            <Instagram />
        </aside>
    );
}