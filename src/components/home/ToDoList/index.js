import { BtnBox, ToDoBtn, ToDoContainer, boxStyle } from "./styled";

const ToDoList = (props) => {
  const todos = props.todos;
  return (
    <div>
      <div>
        <h2>Working.. 🔥</h2>
        <div style={boxStyle}>
          {todos.map((todo) => {
            return (
              <ToDoContainer key={todo.id}>
                <div>
                  <h2>{todo.title}</h2>
                  <spna>{todo.body}</spna>
                </div>
                <BtnBox>
                  <ToDoBtn style={{ border: "2px solid red" }}>
                    삭제하기
                  </ToDoBtn>
                  <ToDoBtn style={{ border: "2px solid green" }}>완료</ToDoBtn>
                </BtnBox>
              </ToDoContainer>
            );
          })}
        </div>
      </div>
      <div>
        <h2>Done..! 🎉</h2>
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
    </div>
  );
};

export default ToDoList;
