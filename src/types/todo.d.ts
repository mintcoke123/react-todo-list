export interface TodoItem {
  id: number;
  text: string;
  checked: boolean;
}

export interface TodoStore {
  todos: TodoItem[];
  addTodo: (todo: TodoItem) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}
