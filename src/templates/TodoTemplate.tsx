import Header from "../components/header/Header";
import styled from "styled-components";
import Main from "../components/main/Main";
import { AddTodo, RemoveTodo, TodoItem, ToggleTodo } from "../types/todo";
import NUMBERS from "../constants/numbers";

const TodoTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  width: auto;
  max-width: ${NUMBERS.mediaQueryBreakpoint}px;
  margin: 0 auto;
`;

interface TodoTemplateProps extends AddTodo, RemoveTodo, ToggleTodo {
  todos: TodoItem[];
}

const TodoTemplate = ({
  todos,
  addTodo,
  removeTodo,
  toggleTodo,
}: TodoTemplateProps) => {
  return (
    <TodoTemplateContainer>
      <Header />
      <Main
        todos={todos}
        addTodo={addTodo}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </TodoTemplateContainer>
  );
};

export default TodoTemplate;
