// app/blog/components/Newsletter.jsx
export default function Newsletter() {
    return (
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-slate-400 dark:shadow-gray-700 shadow-md flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5 text-gray-900 dark:text-white">Subscribe to Our Newsletter</p>
            <p className="pb-2 text-gray-700 dark:text-gray-300">Stay up-to-date with our latest news, articles, and updates. Join our newsletter today!</p>
            <div className="flex flex-col lg:flex-row lg:items-center mt-4">
                <input type="email" placeholder="Enter your email" className="w-full lg:w-2/3 px-3 py-2 mb-2 lg:mb-0 lg:mr-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 dark:bg-gray-700 dark:text-white" />
                <button className="w-full lg:w-1/3 bg-blue-800 dark:bg-blue-700 text-white font-bold text-xs uppercase rounded hover:bg-blue-700 dark:hover:bg-blue-600 flex items-center justify-center px-2 py-3 lg:px-3 lg:py-3 lg:text-sm">
                    Subscribe
                </button>
            </div>
        </div>
    );
}