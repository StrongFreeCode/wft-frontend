import Image from 'next/image';
import { calculateTimeRead } from '../utils/ArticleList';

export default function Article({ imageSrc, category, subcategory, title, author, date, content, tags, tagColors, onTagSelect, onSubCategorySelect }) {
    return (
        <article className="flex  flex-col shadow-md my-4 shadow-slate-400 dark:shadow-gray-800 rounded-t-lg">
            <button onClick={handleArticleClick} className="hover:opacity-75">
                <Image src={imageSrc} alt={title} width={768} height={90} className='w-full max-h-48 object-cover object-center rounded-t-lg' />
            </button>
            <div className="bg-white dark:bg-gray-800 flex hover:bg-slate-100 dark:hover:bg-gray-700 flex-col justify-start p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <span className="text-blue-700 dark:text-blue-300 text-base md:text-lg font-extrabold uppercase pb-4">{category}</span>
                    <button className="inline-flex items-center justify-center text-gray-600 dark:text-gray-300 text-xs font-bold uppercase bg-orange-300 dark:bg-orange-500 rounded-full px-2 py-1 whitespace-nowrap"
                        onClick={() => onSubCategorySelect(subcategory)}
                    >{subcategory}</button>

                </div>
                <button onClick={handleTitleClick} className="text-3xl font-bold dark:text-blue-500 hover:text-blue-700 dark:hover:text-gray-300 pb-4 md:text-justify">{title}</button>
                <button onClick={handleContentClick} className="pb-6 text-justify text-gray-800 dark:text-gray-200">{content}</button>
                <div className='flex justify-between flex-col md:flex-row'>
                    <span className='text-xs text-green-400 dark:text-green-300' >Time Read {calculateTimeRead(content)}</span>
                    <button onClick={handleContinueReadingClick} className="uppercase text-black dark:text-white hover:underline hover:text-blue-700 dark:hover:text-blue-300 text-start">Continue Reading <i className="fas fa-arrow-right"></i></button>
                </div>
                <div className="flex flex-wrap pb-6 mt-4">
                    {tags.map((tag, index) => (
                        <button
                            key={index}
                            className="mr-2 mb-2 px-3 py-1 text-sm text-white rounded hover:opacity-75"
                            style={{ backgroundColor: tagColors[tag] }}
                            onClick={() => onTagSelect(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

            </div>
        </article>
    );
}

const handleArticleClick = () => { }
const handleTitleClick = () => { }
const handleContentClick = () => { }
const handleContinueReadingClick = () => { }