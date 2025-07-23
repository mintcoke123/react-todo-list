export interface TodoItem {
  id: string;
  text: string;
  checked: boolean;
}

export const isTodoItem = (item: any): item is TodoItem => {
  return (
    typeof item === "object" &&
    item !== null &&
    typeof item.id === "string" &&
    typeof item.text === "string" &&
    typeof item.checked === "boolean"
  );
};

export interface AddTodo {
  addTodo: (todo: TodoItem) => void;
}

export interface RemoveTodo {
  removeTodo: (id: string) => void;
}

export interface ToggleTodo {
  toggleTodo: (id: string) => void;
}
