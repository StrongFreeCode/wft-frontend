// app/blog/components/TextHeader.jsx
export default function TextHeader() {
    return (
        <header className="w-full container mx-auto">
            <div className="flex flex-col items-center py-12">
                <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-3xl md:text-5xl" href="#">
                    Wonderfulltime
                </a>
                <p className="md:text-lg text-gray-600 text-sm text-center">
                    Discover the latest news, articles, and trends in the world of technology, automotive, finance, and politics.
                </p>
            </div>
        </header>
    );
}