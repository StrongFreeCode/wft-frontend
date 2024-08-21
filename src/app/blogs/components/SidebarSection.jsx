import React, { useEffect, useState } from 'react';
import Newsletter from './Newsletter';
import SubCategoriesDropdown from './SubCategoriesDropdown';
import Tags from './Tags';
import Instagram from './Instagram';
import { FaFilter, FaTimes, FaEnvelope, FaList, FaTags, FaInstagram, FaEye, FaEyeSlash } from 'react-icons/fa';

const Sidebar = ({ categories, tags, tagColors, selectedTags, onSubCategorySelect, onTagSelect }) => {
    const [showFilterIcon, setShowFilterIcon] = useState(false);
    const [showSlideBar, setShowSlideBar] = useState(false);
    const [showNewsletter, setShowNewsletter] = useState(true);
    const [showSubCategories, setShowSubCategories] = useState(true);
    const [showTags, setShowTags] = useState(true);
    const [showInstagram, setShowInstagram] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setShowFilterIcon(window.innerWidth < 768); // Cambia 768 por el ancho en el que el aside se oculta
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSlideBar = () => {
        setShowSlideBar(!showSlideBar);
    };

    const toggleComponent = (component) => {
        if (window.innerWidth >= 768) return; // No toggle components in md view

        switch (component) {
            case 'subCategories':
                setShowSubCategories(!showSubCategories);
                break;
            case 'tags':
                setShowTags(!showTags);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <aside className={`w-full md:w-1/3 hidden md:flex flex-col items-center px-3 ${showFilterIcon ? 'hidden' : ''}`}>
                <Newsletter />
                <SubCategoriesDropdown categories={categories} onSubCategorySelect={onSubCategorySelect} />
                <Tags tags={tags} tagColors={tagColors} selectedTags={selectedTags} onTagSelect={onTagSelect} />
                <Instagram />
            </aside>
            <div className='md:hidden'>
                <Newsletter />
                <Instagram />
            </div>
            {showFilterIcon && (
                <>
                    <div
                        className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg cursor-pointer"
                        onClick={toggleSlideBar}
                    >
                        <FaFilter />
                    </div>
                    <div
                        className={`fixed top-0 right-0 h-full w-64 bg-slate-200 dark:bg-slate-400 shadow-lg transform transition-transform duration-300 ease-in-out ${showSlideBar ? 'translate-x-0' : 'translate-x-full'}`}
                    >
                        <div className="flex flex-col items-center px-3 py-4 relative h-full">
                            <button
                                className="absolute top-1 right-2 mb-2 text-lg text-gray-500 hover:text-gray-700"
                                onClick={toggleSlideBar}
                            >
                                <FaTimes />
                            </button>
                            <div className="w-full mt-4 flex flex-col space-y-2">

                                <button
                                    className="flex rounded-lg items-center space-x-2 w-full py-2 px-4 hover:bg-gray-100"
                                    onClick={() => toggleComponent('subCategories')}
                                >
                                    {showSubCategories ? <FaEye /> : <FaEyeSlash />}
                                    <FaList />
                                    <span>SubCategories</span>
                                </button>
                                <button
                                    className="flex  rounded-lg items-center space-x-2 w-full py-2 px-4 hover:bg-gray-100"
                                    onClick={() => toggleComponent('tags')}
                                >
                                    {showTags ? <FaEye /> : <FaEyeSlash />}
                                    <FaTags />
                                    <span>Tags</span>
                                </button>

                            </div>
                            <div className="w-full flex-grow overflow-y-auto">

                                {showSubCategories && <SubCategoriesDropdown categories={categories} onSubCategorySelect={onSubCategorySelect} />}
                                {showTags && <Tags tags={tags} tagColors={tagColors} selectedTags={selectedTags} onTagSelect={onTagSelect} />}

                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Sidebar;