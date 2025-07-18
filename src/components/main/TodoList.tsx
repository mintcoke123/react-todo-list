import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import { RemoveTodo, ToggleTodo, TodoItem } from "../../types/todo";
import Texts from "../constants/texts";
import COLORS from "../constants/color";

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TodoListTitle = styled.h2`
  position: relative;
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface TodoListProps extends RemoveTodo, ToggleTodo {
  todos: TodoItem[];
}

const TodoList = ({ todos, removeTodo, toggleTodo }: TodoListProps) => {
  return (
    <TodoListContainer>
      <TodoListTitle>{Texts.todoListTitle}</TodoListTitle>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
