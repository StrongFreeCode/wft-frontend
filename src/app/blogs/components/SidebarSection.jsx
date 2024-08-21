import React, { useState } from 'react';
import SubCategoriesDropdown from './SubCategoriesDropdown';
import Tags from './Tags';
import Instagram from './Instagram';
import Newsletter from './Newsletter';

export default function SidebarSection({ categories, tags, tagColors, selectedTags, onTagSelect, onSubCategorySelect }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [hiddenComponents, setHiddenComponents] = useState([]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const hideComponent = (componentName) => {
        setHiddenComponents([...hiddenComponents, componentName]);
    };

    const showComponent = (componentName) => {
        setHiddenComponents(hiddenComponents.filter(name => name !== componentName));
    };

    const isComponentHidden = (componentName) => hiddenComponents.includes(componentName);

    return (
        <div>
            {/* Botón para abrir/cerrar el sidebar en mobile */}
            <button onClick={toggleSidebar} className="md:hidden fixed bottom-4 right-4 z-50 p-4 bg-blue-500 text-white rounded-full">
                ☰
            </button>

            {/* Sidebar */}
            <aside className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:relative md:flex md:flex-col md:items-center md:px-3`} style={{ maxHeight: '100vh', overflowY: 'auto' }}>
                <button onClick={toggleSidebar} className="md:hidden absolute top-4 right-4">
                    X
                </button>
                <div className="p-4">
                    {!isComponentHidden('Newsletter') && (
                        <div className="relative">
                            <button onClick={() => hideComponent('Newsletter')} className="absolute top-0 right-0 text-sm text-white">X</button>
                            <Newsletter />
                        </div>
                    )}
                    {!isComponentHidden('SubCategoriesDropdown') && (
                        <div className="relative mt-4">
                            <button onClick={() => hideComponent('SubCategoriesDropdown')} className="absolute top-0 right-0 text-sm text-white">X</button>
                            <SubCategoriesDropdown categories={categories} onSubCategorySelect={onSubCategorySelect} />
                        </div>
                    )}
                    {!isComponentHidden('Tags') && (
                        <div className="relative mt-4">
                            <button onClick={() => hideComponent('Tags')} className="absolute top-0 right-0 text-sm text-white">X</button>
                            <Tags tags={tags} tagColors={tagColors} selectedTags={selectedTags} onTagSelect={onTagSelect} />
                        </div>
                    )}
                    {!isComponentHidden('Instagram') && (
                        <div className="relative mt-4">
                            <button onClick={() => hideComponent('Instagram')} className="absolute top-0 right-0 text-sm text-white">X</button>
                            <Instagram />
                        </div>
                    )}
                </div>
                <div className="p-4">
                    {isComponentHidden('Newsletter') && (
                        <button onClick={() => showComponent('Newsletter')} className="block mb-2 text-sm">Mostrar Newsletter</button>
                    )}
                    {isComponentHidden('SubCategoriesDropdown') && (
                        <button onClick={() => showComponent('SubCategoriesDropdown')} className="block mb-2 text-sm">Mostrar Categorías</button>
                    )}
                    {isComponentHidden('Tags') && (
                        <button onClick={() => showComponent('Tags')} className="block mb-2 text-sm">Mostrar Etiquetas</button>
                    )}
                    {isComponentHidden('Instagram') && (
                        <button onClick={() => showComponent('Instagram')} className="block mb-2 text-sm">Mostrar Instagram</button>
                    )}
                </div>
            </aside>
        </div>
    );
}