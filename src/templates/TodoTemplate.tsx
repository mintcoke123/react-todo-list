import Header from "../components/header/Header";
import styled from "styled-components";
import Main from "../components/main/Main";
import { TodoItem } from "../types/todo";

const TodoTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  width: auto;
  max-width: 768px;
  margin: 0 auto;
`;

const TodoTemplate = ({
  todos,
  setTodos,
  addTodo,
  removeTodo,
  toggleTodo,
}: {
  todos: TodoItem[];
  setTodos: (todos: TodoItem[]) => void;
  addTodo: (todo: TodoItem) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}) => {
  return (
    <TodoTemplateContainer>
      <Header />
      <Main
        todos={todos}
        setTodos={setTodos}
        addTodo={addTodo}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </TodoTemplateContainer>
  );
};

export default TodoTemplate;
