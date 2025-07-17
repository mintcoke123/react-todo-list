import styled from "styled-components";
import COLORS from "../constants/color";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdAdd,
} from "react-icons/md";
import { TodoItem } from "../../types/todo";
import useStore from "../../store/store";

const TodoListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid ${COLORS.black};
  background-color: ${COLORS.white};
  margin: 0.1rem 0rem;
`;

const TodoListItemCheckBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 4rem;
  font-size: 2rem;
`;

const TodoListItemContent = styled.div`
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

const TodoListItemRemoveButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 4rem;
  font-size: 2rem;
`;

const TodoListItem = ({ todo }: { todo: TodoItem }) => {
  const { toggleTodo, removeTodo } = useStore();
  return (
    <TodoListItemContainer>
      <TodoListItemCheckBox onClick={() => toggleTodo(todo.id)}>
        {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </TodoListItemCheckBox>
      <TodoListItemContent>
        {todo.checked ? <s>{todo.text}</s> : todo.text}
      </TodoListItemContent>
      <TodoListItemRemoveButton>
        <MdRemoveCircleOutline onClick={() => removeTodo(todo.id)} />
      </TodoListItemRemoveButton>
    </TodoListItemContainer>
  );
};

export default TodoListItem;
