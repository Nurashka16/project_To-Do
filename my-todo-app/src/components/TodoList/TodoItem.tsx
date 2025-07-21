import React from 'react';
import './TodoItem.css'
import { Task } from '../../types/task';

interface TodoItemProps {
    task: Task;
}

const TodoItem = ({ task }: TodoItemProps) => {
    return (
        <li
            className="task"
            role="button"
            tabIndex={0}
            aria-label={task.completed ? "Отменить выполнение" : "Выполнить"}
        >
            <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                {task.value}
            </span>
        </li>
    )
}

export default TodoItem