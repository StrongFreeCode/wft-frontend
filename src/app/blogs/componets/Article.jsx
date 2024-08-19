// app/blog/components/Article.jsx
import Image from 'next/image';

export default function Article({ imageSrc, category, subcategory, title, author, date, content, tags, tagColors }) {
    return (
        <article className="flex flex-col shadow-md my-4 shadow-slate-400">
            <a href="#" className="hover:opacity-75">
                <Image src={imageSrc} alt={title} width={768} height={90} className='w-full max-h-48 object-cover object-center rounded-t-lg' />
            </a>
            <div className="bg-white flex hover:bg-slate-100 flex-col justify-start p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <span className="text-blue-700 text-base md:text-lg font-extrabold uppercase pb-4">{category}</span>
                    <span className="text-gray-600 text-xs font-bold uppercase bg-orange-300 rounded-full px-2 py-1 inline-block">{subcategory}</span>
                </div>
                <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">{title}</a>
                <p href="#" className="text-sm pb-3">
                    By <a href="#" className="font-semibold hover:text-gray-800">{author}</a>, Published on {date}
                </p>
                <a href="#" className="pb-6">{content}</a>
                <div className="flex flex-wrap pb-6">
                    {tags.map((tag, index) => (
                        <a key={index} href="#" className="mr-2 mb-2 px-3 py-1 text-sm text-white rounded hover:opacity-75" style={{ backgroundColor: tagColors[tag] }}>
                            {tag}
                        </a>
                    ))}
                </div>
                <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
            </div>
        </article>
    );
}