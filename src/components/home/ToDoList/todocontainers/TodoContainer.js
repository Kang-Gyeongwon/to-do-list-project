import { BtnBox, ToDoBtn, ToDoContainer } from "./ToDoContainerStyle";

const TodoContainer = (props) => {
  const todos = props.todos
  console.log(todos);
  return (
    <ToDoContainer>
      <div>
        <h2>{todos.title}</h2>
        <spna>{todos.body}</spna>
      </div>
      <BtnBox>
        <ToDoBtn style={{ border: "2px solid red" }}>삭제하기</ToDoBtn>
        <ToDoBtn style={{ border: "2px solid green" }}>완료</ToDoBtn>
      </BtnBox>
    </ToDoContainer>
  );
};

export default TodoContainer;
