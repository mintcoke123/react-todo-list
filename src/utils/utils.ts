import { TodoItem } from "../types/todo";

export function loadTodos(): TodoItem[] {
  try {
    const raw = localStorage.getItem("todos");
    const parsed = JSON.parse(raw ?? "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveTodos(todos: TodoItem[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
