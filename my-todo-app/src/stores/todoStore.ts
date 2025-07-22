import { autorun, makeAutoObservable, observable } from "mobx";
import { Task } from "../types/task";



export class TodoStore {
    todos: Task[] = [
        { id: 1, value: "Создать задачу", completed: false },
        { id: 2, value: "Удалить задачу", completed: false },
    ];

    private nextId = 3;

    constructor() {
        makeAutoObservable(this, {
            todos: observable,
        });
        this.loadFromLocalStorage();
        autorun(() => {
            this.saveToLocalStorage();
        });
    }

    // Загрузка задач из localStorage
    loadFromLocalStorage() {
        const saved = localStorage.getItem("todos");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                this.todos = parsed;
                this.nextId = Math.max(...this.todos.map(t => t.id), 0) + 1;
            } catch (e) {
                console.error("Ошибка при загрузке данных из localStorage", e);
            }
        }
    }

    // Сохранение задач в localStorage
    saveToLocalStorage() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    // Добавление новой задачи
    addTodo(value: string) {
        this.todos.push({ id: this.nextId++, value, completed: false });
    }

    // Удаление задачи по ID
    deleteTodo(id: number) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }

    // Переключение статуса задачи
    toggleTodo(id: number) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }

    // Фильтрация задач
    filteredTodos(filter: "all" | "active" | "completed") {
        if (filter === "active") return this.todos.filter(todo => !todo.completed);
        if (filter === "completed") return this.todos.filter(todo => todo.completed);
        return this.todos;
    }

    // Очистка завершённых задач
    clearCompleted() {
        this.todos = this.todos.filter((todo) => !todo.completed);
    }
}
export const store = new TodoStore();
