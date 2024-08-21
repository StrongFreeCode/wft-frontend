import { FaRemoveFormat, FaTrash } from "react-icons/fa";

export default function ActiveFilters({ selectedTags, selectedCategory, selectedSubCategory, onRemoveTag, onRemoveCategory, onRemoveSubCategory, tagColors }) {
    const hasFilters = selectedCategory || selectedSubCategory || selectedTags.length > 0;

    const handleResetFilters = () => {
        onRemoveCategory();
        onRemoveSubCategory();
        selectedTags.forEach(tag => onRemoveTag(tag));
    };

    return (
        <div className="flex items-center justify-center my-4 h-12">
            {selectedCategory && (
                <span
                    onClick={onRemoveCategory}
                    className="px-3 py-1 mr-2 text-sm text-white bg-blue-800 rounded cursor-pointer hover:bg-blue-700 hover:shadow-md transition duration-300 ease-in-out"
                >
                    {selectedCategory}
                    <button
                        className="ml-2 text-white hover:text-gray-200 focus:outline-none"
                        aria-label={`Remove ${selectedCategory}`}
                    >
                        &times;
                    </button>
                </span>
            )}
            {selectedSubCategory && (
                <span
                    onClick={onRemoveSubCategory}
                    className="px-3 py-1 mr-2 text-sm text-white bg-blue-600 rounded cursor-pointer hover:bg-blue-500 hover:shadow-md transition duration-300 ease-in-out"
                >
                    {selectedSubCategory}
                    <button
                        className="ml-2 text-white hover:text-gray-200 focus:outline-none"
                        aria-label={`Remove ${selectedSubCategory}`}
                    >
                        &times;
                    </button>
                </span>
            )}
            {selectedTags.map((tag, index) => (
                <span
                    key={index}
                    onClick={() => onRemoveTag(tag)}
                    className="px-3 py-1 mr-2 text-sm text-white rounded cursor-pointer hover:opacity-75 hover:shadow-md transition duration-300 ease-in-out"
                    style={{ backgroundColor: tagColors[tag] }}
                >
                    {tag}
                    <button
                        className="ml-2 text-white hover:text-gray-200 focus:outline-none"
                        aria-label={`Remove ${tag}`}
                    >
                        &times;
                    </button>
                </span>
            ))}
            {hasFilters && (
                <button
                    onClick={handleResetFilters}
                    className="animate-pulse flex flex-nowrap items-center px-3 py-1 text-sm text-white bg-red-600 rounded cursor-pointer hover:bg-red-500 hover:shadow-md transition duration-300 ease-in-out"
                >
                    <FaTrash /> Reset Filters
                </button>
            )}
        </div>
    );
}