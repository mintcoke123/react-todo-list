import styled from "styled-components";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";
import { TodoItem } from "../../types/todo";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Main = ({
  todos,
  setTodos,
  addTodo,
  removeTodo,
  toggleTodo,
}: {
  todos: TodoItem[];
  setTodos: (todos: TodoItem[]) => void;
  addTodo: (todo: TodoItem) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}) => {
  return (
    <MainContainer>
      <TodoInsert addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </MainContainer>
  );
};

export default Main;
