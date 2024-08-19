// app/blog/components/ActiveFilters.jsx
export default function ActiveFilters({ selectedTags, selectedCategory, selectedSubCategory, onRemoveTag, onRemoveCategory, onRemoveSubCategory, tagColors }) {
    return (
        <div className="flex items-center justify-center my-4">
            {selectedCategory && (
                <span className="px-3 py-1 mr-2 text-sm text-white bg-blue-800 rounded hover:bg-blue-700">
                    {selectedCategory}
                    <button onClick={onRemoveCategory} className="ml-2 text-white hover:text-gray-200">
                        &times;
                    </button>
                </span>
            )}
            {selectedSubCategory && (
                <span className="px-3 py-1 mr-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-500">
                    {selectedSubCategory}
                    <button onClick={onRemoveSubCategory} className="ml-2 text-white hover:text-gray-200">
                        &times;
                    </button>
                </span>
            )}
            {selectedTags.map((tag, index) => (
                <span key={index} className="px-3 py-1 mr-2 text-sm text-white rounded hover:opacity-75" style={{ backgroundColor: tagColors[tag] }}>
                    {tag}
                    <button onClick={() => onRemoveTag(tag)} className="ml-2 text-white hover:text-gray-200">
                        &times;
                    </button>
                </span>
            ))}
        </div>
    );
}