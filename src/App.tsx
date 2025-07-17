import TodoTemplate from "./templates/TodoTemplate";
import "./index.css";
import { useState } from "react";
import { TodoItem } from "./types/todo";

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (todo: TodoItem) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  return (
    <TodoTemplate
      todos={todos}
      setTodos={setTodos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      toggleTodo={toggleTodo}
    />
  );
}

export default App;
