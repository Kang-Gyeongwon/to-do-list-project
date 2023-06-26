import { useState } from "react";
import { BtnBox, ToDoBtn, ToDoContainer, boxStyle } from "./styled";

const ToDoList = (props) => {
  const todos = props.todos;
  const [isDone, setIsDone] = useState(false);
  const handleCompletionOnclick = (currentId) => {
    todos.map((todo) => {
      return todo.id !== currentId ? todo : setIsDone(!isDone);
    });
  };
  const handleRemoveOnclick = (removeId) => {
    console.log(props.onRemoveTodo);
    props.onRemoveTodo(removeId);
  };
  return (
    <div>
      <div>
        <h2>Working.. 🔥</h2>
        <div style={boxStyle}>
          {todos.map((todo) => {
            if (isDone === false) {
              return (
                <ToDoContainer key={todo.id}>
                  <div>
                    <h2>{todo.title}</h2>
                    <spna>{todo.body}</spna>
                  </div>
                  <BtnBox>
                    <ToDoBtn
                      style={{ border: "2px solid red" }}
                      onClick={() => {
                        handleRemoveOnclick(todo.id);
                      }}
                    >
                      삭제하기
                    </ToDoBtn>
                    <ToDoBtn
                      style={{ border: "2px solid green" }}
                      onClick={() => {
                        handleCompletionOnclick(todo.id);
                      }}
                    >
                      완료
                    </ToDoBtn>
                  </BtnBox>
                </ToDoContainer>
              );
            }
          })}
        </div>
      </div>
      <div>
        <h2>Done..! 🎉</h2>
        {todos.map((todo) => {
          if (isDone !== false) {
            return (
              <ToDoContainer key={todo.id}>
                <div>
                  <h2>{todo.title}</h2>
                  <spna>{todo.body}</spna>
                </div>
                <BtnBox>
                  <ToDoBtn
                    style={{ border: "2px solid red" }}
                    onClick={() => {
                      handleCompletionOnclick(todo.id);
                    }}
                  >
                    삭제하기
                  </ToDoBtn>
                  <ToDoBtn
                    style={{ border: "2px solid green" }}
                    onClick={() => {
                      handleCompletionOnclick(todo.id);
                    }}
                  >
                    완료
                  </ToDoBtn>
                </BtnBox>
              </ToDoContainer>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ToDoList;
