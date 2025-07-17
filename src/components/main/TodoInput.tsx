import styled from "styled-components";
import COLORS from "../constants/color";
import { MdAdd } from "react-icons/md";

const TodoInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TodoInputForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const TodoInputInput = styled.input`
  font-size: 2rem;
  font-weight: bold;
  color: ${COLORS.black};
  width: 100%;
  padding: 1rem;
  border: 1px solid ${COLORS.black};
  background-color: ${COLORS.white};
  margin: 1rem 0rem;
`;

const TodoInputButton = styled.button`
  font-size: 2rem;
  font-weight: bold;
  color: ${COLORS.white};
  background-color: ${COLORS.primary};
  padding: 1rem;
`;

const TodoInput = () => {
  return (
    <TodoInputContainer>
      <TodoInputForm>
        <TodoInputInput type="text" placeholder="할 일을 입력하세요" />
        <TodoInputButton>
          <MdAdd />
        </TodoInputButton>
      </TodoInputForm>
    </TodoInputContainer>
  );
};

export default TodoInput;
