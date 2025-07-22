import React from "react";
import { observer } from "mobx-react-lite";
import "./TodoList.css";
import { useTheme } from "../../hooks/useTheme";
import TodoItem from "./TodoItem";
import Pagination from "../Pagination/Pagination";
import { Task } from "../../types/task";
import { FilterType } from "../../types/filterOptions";
import { store } from "../../stores/todoStore";


interface TaskListProps {
    filter: FilterType;
}

export const TaskList = observer(({ filter }: TaskListProps) => {
    const { theme } = useTheme();
    const [currentPage, setCurrentPage] = React.useState(1);
    const tasksPerPage = 7;

    const filteredTasks = store.filteredTodos(filter);
    const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);
    const currentTasks = filteredTasks.slice(
        (currentPage - 1) * tasksPerPage,
        currentPage * tasksPerPage
    );

    return (
        <div className={`todo-list ${theme}`}>
            <ul>
                {currentTasks.map((task: Task) => (
                    <div key={task.id} className="list">
                        <svg
                            className="check-icon"
                            onClick={() => store.toggleTodo(task.id)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            {!!task.completed && <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />}
                        </svg>
                        <TodoItem task={task} />
                        <svg
                            className="delete-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            onClick={(e) => {
                                e.stopPropagation();
                                store.deleteTodo(task.id);
                            }}
                            role="button"
                            tabIndex={0}
                            aria-label="Удалить задачу"
                        >
                            <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0z" />
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6z" />
                        </svg>
                    </div>
                ))}
            </ul>

            {totalPages > 1 && (
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            )}
        </div>
    );
});