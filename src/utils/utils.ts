import { TodoItem } from "../types/todo";

export function loadTodos(): TodoItem[] {
  try {
    const savedTodos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(savedTodos ?? "[]");
    return Array.isArray(parsedTodos) ? parsedTodos : [];
  } catch {
    return [];
  }
}

export function saveTodos(todos: TodoItem[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
