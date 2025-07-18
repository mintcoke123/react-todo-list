import TodoTemplate from "./templates/TodoTemplate";
import "./index.css";
import { useState, useEffect } from "react";
import { loadTodos, saveTodos } from "./utils/utils";

function App() {
  const [todos, setTodos] = useState(loadTodos);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  return (
    <TodoTemplate
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      toggleTodo={toggleTodo}
    />
  );
}

export default App;
