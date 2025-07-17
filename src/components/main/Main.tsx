import styled from "styled-components";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Main = () => {
  return (
    <MainContainer>
      <TodoInsert />
      <TodoList />
    </MainContainer>
  );
};

export default Main;
