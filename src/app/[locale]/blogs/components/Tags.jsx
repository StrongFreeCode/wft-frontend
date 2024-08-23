'use client'
import { useState } from 'react';

export default function Tags({ tags, tagColors, selectedTags, onTagSelect }) {
    const [showAllTags, setShowAllTags] = useState(false);

    const visibleTags = showAllTags ? tags : tags.slice(0, 15);
    const remainingTagsCount = tags.length - visibleTags.length;

    return (
        <div className="w-full bg-white dark:bg-gray-800 rounded-md shadow-slate-400 dark:shadow-gray-700 shadow-md flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5 text-gray-900 dark:text-white">Tags</p>
            <div className="flex flex-wrap">
                {visibleTags.map((tag, index) => (
                    <button
                        key={index}
                        className={`mr-2 mb-2 px-3 py-1 text-sm text-white rounded hover:opacity-75 ${selectedTags.includes(tag) ? 'opacity-75' : ''}`}
                        style={{ backgroundColor: tagColors[tag] }}
                        onClick={() => onTagSelect(tag)}
                    >
                        {tag}
                    </button>
                ))}
                {(remainingTagsCount > 0 || showAllTags) && (
                    <button
                        className="mr-2 mb-2 px-3 py-1 text-sm text-white bg-gray-500 dark:bg-gray-700 rounded hover:opacity-75"
                        onClick={() => setShowAllTags(!showAllTags)}
                    >
                        {showAllTags ? 'Show less' : `+${remainingTagsCount} more`}
                    </button>
                )}
            </div>
        </div>
    );
}