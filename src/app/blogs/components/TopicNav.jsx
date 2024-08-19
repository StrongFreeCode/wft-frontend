// app/blog/components/TopicNav.jsx
import { useState } from 'react';

export default function TopicNav({ categories, onCategorySelect }) {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full py-4 border-t border-b bg-gray-100">
            <div className="block sm:hidden">
                <a
                    href="#"
                    className="md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
                    onClick={() => setOpen(!open)}
                >
                    Topics <i className={`fas ml-2 ${open ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
                </a>
            </div>
            <div className={`${open ? 'block' : 'hidden'} w-full flex-grow sm:flex sm:items-center sm:w-auto`}>
                <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                    {categories.map((category, index) => (
                        <a key={index} href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2" onClick={() => onCategorySelect(category.name)}>
                            {category.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}