import React, { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import { Header } from "./components/Header/Header";
import "./App.css";
import './assets/css/reset.css';
import './assets/css/variables.css';
import ThemeSwitcher from "./components/ThemeSwitcher";
import { TaskList } from "./components/TodoList/TodoList";
import { FilterType } from "./types/filterOptions";


function App() {
  const [filter, setFilter] = useState<FilterType>("all");
  const { theme } = useTheme();
  return (
    <div className={"app"}>
      <div className="theme-button"> <ThemeSwitcher className="theme-switcher" /></div>
      <div className={`app-container ${theme}`}>
        <Header filter={filter} setFilter={setFilter} />
        <main className="content">
          <TaskList filter={filter} />
        </main>
      </div>
    </div>
  );
}

export default App;
