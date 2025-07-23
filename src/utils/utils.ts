import { TodoItem } from "../types/todo";

export const isTodoItem = (item: any): item is TodoItem => {
  return (
    typeof item === "object" &&
    item !== null &&
    typeof item.id === "string" &&
    typeof item.text === "string" &&
    typeof item.checked === "boolean"
  );
};

export function loadTodos(): TodoItem[] {
  try {
    const savedRawTodos = localStorage.getItem("todos");
    if (!savedRawTodos) return [];
    const parsedTodos = JSON.parse(savedRawTodos);
    if (!Array.isArray(parsedTodos)) return [];
    return parsedTodos.filter(isTodoItem);
  } catch {
    return [];
  }
}

export function saveTodos(todos: TodoItem[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
