import { create } from "zustand";
import { TodoItem, TodoStore } from "../types/todo";
import { persist } from "zustand/middleware";

const useStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (todo: TodoItem) =>
        set((state) => ({ todos: [...state.todos, todo] })),
      removeTodo: (id: number) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      toggleTodo: (id: number) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
          ),
        })),
    }),
    {
      name: "todos",
    }
  )
);

export default useStore;
