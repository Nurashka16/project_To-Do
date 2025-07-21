import React from 'react';
import './Pagination.css'

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}
const Pagination = ({ totalPages, currentPage, setCurrentPage }: PaginationProps) => {
    return (
        <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                aria-label="Навигация по страницам"
                    key={page}
                    className={`page ${currentPage === page ? "active" : ""}`}
                    onClick={() => setCurrentPage(page)}
                    disabled={currentPage === page}
                >
                    {page}
                </button>
            ))}
        </div>
    )
}

export default Pagination