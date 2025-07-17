import Header from "../components/header/Header";
import styled from "styled-components";
import Main from "../components/main/Main";

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

const TodoTemplate = () => {
  return (
    <TodoTemplateContainer>
      <Header />
      <Main />
    </TodoTemplateContainer>
  );
};

export default TodoTemplate;
