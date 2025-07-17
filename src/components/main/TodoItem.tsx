import styled from "styled-components";
import COLORS from "../constants/color";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdAdd,
} from "react-icons/md";

const TodoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid ${COLORS.black};
  background-color: ${COLORS.white};
  margin: 0.1rem 0rem;
`;

const TodoItemCheckBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 4rem;
  font-size: 2rem;
`;

const TodoItemContent = styled.div`
  display: block;
  align-items: center;
  line-height: 4rem;
  width: 100%;
  height: 4rem;
  font-size: 1.5rem;
  color: ${COLORS.black};
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const TodoItemRemoveButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 4rem;
  font-size: 2rem;
`;

const TodoItem = () => {
  return (
    <TodoItemContainer>
      <TodoItemCheckBox>
        <MdCheckBoxOutlineBlank />
      </TodoItemCheckBox>
      <TodoItemContent>TodoItsdfjfjkhfsdhjksdfjkhsdfkjfsdjkem</TodoItemContent>
      <TodoItemRemoveButton>
        <MdRemoveCircleOutline />
      </TodoItemRemoveButton>
    </TodoItemContainer>
  );
};

export default TodoItem;
