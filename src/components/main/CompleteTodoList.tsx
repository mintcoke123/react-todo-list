import styled from "styled-components";
import TodoItem from "./TodoItem";
import { FaTrash } from "react-icons/fa";

const CompleteTodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const CompleteTodoListTitle = styled.h2`
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

const CompleteTodoListTitleTrash = styled(FaTrash)`
  font-size: 1.5rem;
  color: #fff;
  position: absolute;
  right: 1rem;
`;

const CompleteTodoList = () => {
  return (
    <CompleteTodoListContainer>
      <CompleteTodoListTitle>
        완료된 할 일
        <CompleteTodoListTitleTrash />
      </CompleteTodoListTitle>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </CompleteTodoListContainer>
  );
};

export default CompleteTodoList;
