import styled from "styled-components";
import COLORS from "../constants/color";
import { MdAdd } from "react-icons/md";
import useStore from "../../store/store";
import { useState } from "react";

const TodoInsertContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TodoInsertForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const TodoInsertInput = styled.input`
  font-size: 2rem;
  font-weight: bold;
  color: ${COLORS.black};
  width: 100%;
  padding: 1rem;
  border: 1px solid ${COLORS.black};
  background-color: ${COLORS.white};
  margin: 1rem 0rem;
`;

const TodoInsertButton = styled.button`
  font-size: 2rem;
  font-weight: bold;
  color: ${COLORS.white};
  background-color: ${COLORS.primary};
  padding: 1rem;
`;

const TodoInsert = () => {
  const { addTodo } = useStore();
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") return;
    addTodo({ id: Date.now(), text: value, checked: false });
    setValue("");
  };

  return (
    <TodoInsertContainer>
      <TodoInsertForm onSubmit={onSubmit}>
        <TodoInsertInput
          type="text"
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <TodoInsertButton type="submit">
          <MdAdd />
        </TodoInsertButton>
      </TodoInsertForm>
    </TodoInsertContainer>
  );
};

export default TodoInsert;
