// app/blog/components/Newsletter.jsx
export default function Newsletter() {
    return (
        <div className="w-full bg-white rounded-lg shadow-slate-400 shadow-md flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">Subscribe to Our Newsletter</p>
            <p className="pb-2">Stay up-to-date with our latest news, articles, and updates. Join our newsletter today!</p>
            <div className="flex flex-col md:flex-row md:items-center mt-4">
                <input type="email" placeholder="Enter your email" className="w-full md:w-2/3 px-3 py-2 mb-2 md:mb-0 md:mr-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                <button className="w-full md:w-1/3 bg-blue-800 text-white font-bold text-xs uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3">
                    Subscribe
                </button>
            </div>
        </div>
    );
}