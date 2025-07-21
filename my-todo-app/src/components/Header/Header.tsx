import React, { useState } from "react";
import "./Header.css";
import { FilterType } from "../../types/filterOptions";
import TodoFilter from "./TodoFilter/TodoFilter";
import { store } from "../../stores/todoStore";
import { observer } from "mobx-react-lite";

interface HeaderProps {
    filter: FilterType;
    setFilter: (filter: FilterType) => void;
}

export const Header = observer(({ filter, setFilter }: HeaderProps) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (value.trim()) {
            store.addTodo(value);
            setValue("");
        }
    };

    return (
        <header className="todo-header">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className="input"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Что нужно сделать?"
                />
                <button type="submit" className="add-button" aria-label="Добавить задачу">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                </button>
            </form>
            <TodoFilter filter={filter} setFilter={setFilter} />
        </header>
    );
});