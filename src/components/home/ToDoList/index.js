import TodoContainer from "../../shard/TodoContainer";

const ToDoList = () => {
  return (
    <div>
      <div>
        <h2>Working.. 🔥</h2>
        <TodoContainer />
      </div>
      <div>
        <h2>Done..! 🎉</h2>
        <TodoContainer />
      </div>
    </div>
  );
};

export default ToDoList;
