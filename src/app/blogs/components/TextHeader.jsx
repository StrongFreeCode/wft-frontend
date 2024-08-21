// app/blog/components/TextHeader.jsx
export default function TextHeader() {
    return (
        <header className="w-full container mx-auto">
            <div className="flex flex-col items-center py-12">
                <a className="font-bold text-blue-400 uppercase hover:text-blue-500 text-4xl md:text-5xl" href="#">
                    Wonderfulltime
                </a>
                <p className="md:text-lg text-gray-800 dark:text-gray-200 text-sm text-center mt-4">
                    Discover the latest news, articles, and trends in the world of technology, automotive, finance, and politics.
                </p>
            </div>
        </header>
    );
}