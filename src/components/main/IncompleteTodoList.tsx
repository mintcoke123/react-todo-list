import styled from "styled-components";
import TodoItem from "./TodoItem";
import { FaTrash } from "react-icons/fa";

const IncompleteTodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const IncompleteTodoListTitle = styled.h2`
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

const IncompleteTodoListTitleTrash = styled(FaTrash)`
  font-size: 1.5rem;
  color: #fff;
  position: absolute;
  right: 1rem;
`;

const IncompleteTodoList = () => {
  return (
    <IncompleteTodoListContainer>
      <IncompleteTodoListTitle>
        미완료 할 일
        <IncompleteTodoListTitleTrash />
      </IncompleteTodoListTitle>

      <TodoItem />
      <TodoItem />
      <TodoItem />
    </IncompleteTodoListContainer>
  );
};

export default IncompleteTodoList;
