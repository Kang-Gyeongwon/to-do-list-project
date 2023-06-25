import { BtnBox, ToDoBtn, ToDoContainer } from "./ToDoContainerStyle";

const TodoContainer = () => {
  return (
    <ToDoContainer>
      <div>
        <h2>리액트 공부하기</h2>
        <spna>리액트 기초를 공부해봅시다</spna>
      </div>
      <BtnBox>
        <ToDoBtn style={{ border: "2px solid red" }}>삭제하기</ToDoBtn>
        <ToDoBtn style={{ border: "2px solid green" }}>완료</ToDoBtn>
      </BtnBox>
    </ToDoContainer>
  );
};

export default TodoContainer;
