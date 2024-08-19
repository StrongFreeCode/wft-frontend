// app/blog/components/Pagination.jsx
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const maxPagesToShow = 5; // Número máximo de páginas a mostrar a la vez
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);

    let startPage = Math.max(currentPage - halfMaxPagesToShow, 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    if (endPage - startPage < maxPagesToShow - 1) {
        startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    return (
        <div className="flex items-center justify-center py-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 text-gray-800 hover:text-white mr-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <FaChevronLeft className="text-sm" />
            </button>
            {startPage > 1 && (
                <button
                    onClick={() => onPageChange(1)}
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white mx-1"
                >
                    1
                </button>
            )}
            {startPage > 2 && (
                <span className="mx-1">...</span>
            )}
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`h-10 w-10 flex items-center justify-center rounded-full ${page === currentPage ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white'} mx-1`}
                >
                    {page}
                </button>
            ))}
            {endPage < totalPages - 1 && (
                <span className="mx-1">...</span>
            )}
            {endPage < totalPages && (
                <button
                    onClick={() => onPageChange(totalPages)}
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white mx-1"
                >
                    {totalPages}
                </button>
            )}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 text-gray-800 hover:text-white ml-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <FaChevronRight className="text-sm" />
            </button>
        </div>
    );
}