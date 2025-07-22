# Todo App
Простое и красивое приложение для управления задачами, создан с использованием современных технологий.  
Макет: [Ссылка на макет](https://www.dropbox.com/scl/fi/gt739pzayd1qenkanl8ob/todo.png?rlkey=fpomv7cgkts9lz8xatpl4i2of&st=3bwcfuw0&dl=0)

## Особенности
Добавление и удаление задач  
Отметка выполнения (галочка)  
Фильтрация: все / активные / завершённые  
Пагинация (по 7 задач на странице)  
Темная и светлая тема  
Сохранение данных в `localStorage`  
Адаптивный дизайн — отлично выглядит на мобильных, планшетах и десктопах  
Написано на TypeScript — типизация везде  
Используется MobX для управления состоянием  

---

##  Как запустить проект
1. Клонируем репозиторий
2. Переходим в папку проекта: cd todo-app
3. Установливаем зависимости: npm install
4. Запускаем сервер разработки: npm run dev

## Стек технологий
React — интерфейс
TypeScript — статическая типизация
MobX — управление состоянием
CSS — кастомные стили без сторонних библиотек
localStorage — сохранение данных между сессиями
Responsive Design — поддержка всех устройств

## Тестирование
Проект покрыт юнит-тестами с использованием **Jest**
Запустите тесты: npx jest src/stores/__tests__/todoStore.test.ts

## Архитектура проекта
my-todo-app/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── App.css
│   │   │   ├── reset.css
│   │   │   └── variables.css
│   ├── components/
│   │   ├── Header/
│   │   │   ├── TodoFilter/
│   │   │   │   ├── TodoFilter.tsx
│   │   │   │   └── TodoFilter.css
│   │   │   ├── Header.tsx
│   │   │   └── Header.css
│   │   ├── Pagination/
│   │   │   ├── Pagination.tsx
│   │   │   └── Pagination.css
│   │   ├── ThemeSwitcher/
│   │   │   ├── ThemeSwitcher.tsx
│   │   │   └── ThemeSwitcher.css
│   │   └── TodoList/
│   │       ├── TodoItem/
│   │       │   ├── TodoItem.tsx
│   │       │   └── TodoItem.css
│   │       ├── TodoList.tsx
│   │       └── TodoList.css
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   └── useTheme.ts
│   ├── stores/
│   │   ├── todoStore.ts
│   │   └── __tests__/
│   │       └── todoStore.test.ts
│   ├── types/
│   │   ├── filterOptions.ts
│   │   └── task.ts
│   ├── App.tsx
│   └── main.tsx

Обратная связь: tilepovanura@gmail.com
Создано с ❤️ — Tilepova Nuraiym