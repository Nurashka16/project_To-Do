import { TodoStore } from "../../stores/todoStore";

describe("TodoStore", () => {
    let store: TodoStore;

    beforeEach(() => {
        localStorage.clear();
        store = new TodoStore();
        store.loadFromLocalStorage = () => { }; // отключаем загрузку
    });

    test("addTodo добавляет новую задачу", () => {
        store.addTodo("Новая задача");
        expect(store.todos).toHaveLength(3);
        expect(store.todos[2].value).toBe("Новая задача");
        expect(store.todos[2].completed).toBe(false);
    });

    test("deleteTodo удаляет задачу по id", () => {
        store.deleteTodo(1);
        expect(store.todos).toHaveLength(1);
        expect(store.todos[0].id).toBe(2);
    });

    test("toggleTodo меняет статус completed", () => {
        store.toggleTodo(1);
        expect(store.todos[0].completed).toBe(true);
        store.toggleTodo(1);
        expect(store.todos[0].completed).toBe(false);
    });

    test("filteredTodos возвращает только активные задачи", () => {
        store.toggleTodo(2); // делаем вторую задачу выполненной
        const activeTodos = store.filteredTodos('active');
        expect(activeTodos).toHaveLength(1);
        expect(activeTodos[0].id).toBe(1);
    });

    test("clearCompleted удаляет выполненные задачи", () => {
        store.toggleTodo(2); // делаем вторую задачу выполненной
        store.clearCompleted();
        expect(store.todos).toHaveLength(1);
        expect(store.todos[0].id).toBe(1);
    });
});