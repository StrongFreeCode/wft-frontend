'use client'
import { useState } from 'react';

export default function SubCategoriesDropdown({ categories, onSubCategorySelect }) {
    const [open, setOpen] = useState(false);
    const [subOpen, setSubOpen] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    const toggleSubCategory = (categoryIndex) => {
        setSubOpen({
            ...subOpen,
            [categoryIndex]: !subOpen[categoryIndex]
        });
    };

    const selectSubCategory = (category, subcategory) => {
        setSelectedCategory(category);
        setSelectedSubCategory(subcategory);
        onSubCategorySelect(subcategory);
        setOpen(false); // Close the dropdown after selecting a sub-category
    };

    return (
        <div className="w-full bg-white dark:bg-gray-800 shadow-slate-400 dark:shadow-gray-700 shadow-md flex flex-col my-4 p-6 rounded-lg">
            <p className="text-xl font-semibold pb-5 text-gray-900 dark:text-white">SubCategories</p>
            <div className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    className="w-full text-left py-3 px-4 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none flex justify-between items-center"
                >
                    <span className="text-gray-900 dark:text-white">
                        {selectedCategory ? `${selectedCategory.name}${selectedSubCategory ? ` > ${selectedSubCategory}` : ''}` : 'Select Category'}
                    </span>
                    <i className={`fas ml-2 ${open ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-900 dark:text-white`}></i>
                </button>
                {open && (
                    <div className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden">
                        {categories.map((category, index) => (
                            <div key={index} className="py-1">
                                <button
                                    onClick={() => toggleSubCategory(index)}
                                    className=" w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 flex justify-between items-center"
                                >
                                    <span>{category.name}</span>
                                    {category.subcategories.length > 0 && (
                                        <i className={`fas ml-2 ${subOpen[index] ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-700 dark:text-gray-300`}></i>
                                    )}
                                </button>
                                {subOpen[index] && category.subcategories.map((subcategory, subIndex) => (
                                    <button
                                        key={subIndex}
                                        onClick={() => selectSubCategory(category, subcategory)}
                                        className="block w-full text-left px-8 py-2 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    >
                                        {subcategory}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}