import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import { FaTrash } from "react-icons/fa";

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
  color: #fff;
  background-color: #000;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoListTitleTrash = styled(FaTrash)`
  font-size: 1.5rem;
  color: #fff;
  position: absolute;
  right: 1rem;
`;

const TodoList = () => {
  return (
    <TodoListContainer>
      <TodoListTitle>
        할 일
        <TodoListTitleTrash />
      </TodoListTitle>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </TodoListContainer>
  );
};

export default TodoList;
