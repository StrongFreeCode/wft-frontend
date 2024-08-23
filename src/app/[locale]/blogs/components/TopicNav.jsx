'use client'
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function TopicNav({ categories, onCategorySelect }) {
    const [open, setOpen] = useState(false);

    const handleCategorySelect = (categoryName) => {
        onCategorySelect(categoryName);
        setOpen(false); // Cerrar el menú después de seleccionar una categoría
    };

    return (
        <nav className="w-full py-4 border-t border-b bg-gray-100">
            <div className="block sm:hidden">
                <button
                    className="md:hidden text-base font-bold uppercase text-center flex justify-center items-center w-full"
                    onClick={() => setOpen(!open)}
                >
                    Topics {open ? (<FaChevronUp className='ml-2' />) : (<FaChevronDown className='ml-2' />)}
                </button>
            </div>
            <div className={`${open ? 'block' : 'hidden'} w-full flex-grow sm:flex sm:items-center sm:w-auto`}>
                <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className="hover:bg-gray-400 rounded py-2 px-4 mx-2 transition duration-300 ease-in-out transform hover:scale-105"
                            onClick={() => handleCategorySelect(category.name)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}