import { TodoItem } from "../types/todo";

export function loadTodos(): TodoItem[] {
  try {
    const savedRawTodos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(savedRawTodos ?? "[]");
    return Array.isArray(parsedTodos) ? parsedTodos : [];
  } catch {
    return [];
  }
}

export function saveTodos(todos: TodoItem[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
