import { useState } from "react";
import { Headline, InputBox, FormLabel, FormInput, AddBtn } from "./styled";

const Header = () => {
  const [todos, updateTodo] = useState([]);
  const [todoId, updateTodoId] = useState(0);
  const [curTilte, updateTitle] = useState("");
  const [curBody, updateBody] = useState("");

  const handleClickSubmit = () => {
    if (todoId >= 0) {
      updateTodo([
        ...todos,
        {
          id: todoId,
          title: curTilte,
          body: curBody,
          isDone: false,
        },
      ]);
      updateTodoId(todoId + 1);
      updateTitle("");
      updateBody("");
      console.log(curTilte, curBody);
    }
  };

  return (
    <div>
      <Headline>
        <spna>My Todo List</spna>
        <span>React</span>
      </Headline>
      <InputBox>
        <FormLabel>제목</FormLabel>
        <FormInput
          type="text"
          value={curTilte}
          onChange={(e) => updateTitle(e.target.value)}
        />
        <FormLabel>내용</FormLabel>
        <FormInput
          type="text"
          value={curBody}
          onChange={(e) => updateBody(e.target.value)}
        />
        <AddBtn type="submit" value="추가하기" onClick={handleClickSubmit} />
      </InputBox>
    </div>
  );
};

export default Header;
