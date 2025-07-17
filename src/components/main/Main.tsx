import styled from "styled-components";
import CompleteTodoList from "./CompleteTodoList";
import IncompleteTodoList from "./IncompleteTodoList";
import TodoInput from "./TodoInput";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Main = () => {
  return (
    <MainContainer>
      <TodoInput />
      <IncompleteTodoList />
      <CompleteTodoList />
    </MainContainer>
  );
};

export default Main;
