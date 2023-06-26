import { BtnBox, ToDoBtn, ToDoContainer } from "./styled";

const TodoContainer = (props) => {
  const todos = props.todos;
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <ToDoContainer key={todo.id}>
            <div>
              <h2>{todo.title}</h2>
              <spna>{todo.body}</spna>
            </div>
            <BtnBox>
              <ToDoBtn style={{ border: "2px solid red" }}>삭제하기</ToDoBtn>
              <ToDoBtn style={{ border: "2px solid green" }}>완료</ToDoBtn>
            </BtnBox>
          </ToDoContainer>
        );
      })}
    </div>
  );
};

export default TodoContainer;
