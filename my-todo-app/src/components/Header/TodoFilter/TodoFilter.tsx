import React, { useState } from 'react';
import { filterOptions, FilterType } from "../../../types/filterOptions";
import './TodoFilter.css';

interface TodoFilterProps {
    filter: FilterType;
    setFilter: (filter: FilterType) => void;
}

const TodoFilter = ({ filter, setFilter }: TodoFilterProps) => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`custom-select ${isOpen ? "open" : ""}`} role="combobox"
            aria-expanded={isOpen}
            aria-label="Фильтр задач" onClick={() => setIsOpen(!isOpen)}>
            <div className={`custom-select-trigger ${isOpen ? "selected" : ""}`}>
                {filterOptions.find((o) => o.value === filter)?.label}
                <span className="arrow">
                    <svg className="arrow-down" viewBox="0 0 20 20">
                        <path d="M6.995 9.268l5.004 5.005 5.004-5.005H6.995z" />
                    </svg>
                </span>
            </div>
            {isOpen && (
                <ul className="custom-options">
                    {filterOptions.map((option, i) => (
                        <li
                            key={option.value}
                            className={`custom-option ${option.value === filter ? "selected" : ""}`}
                            onClick={() => {
                                setFilter(option.value);
                                setIsOpen(false);
                            }}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TodoFilter