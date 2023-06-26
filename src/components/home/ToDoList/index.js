import TodoContainer from "../../shard/TodoContainer";

const ToDoList = (props) => {
  console.log(props)
  return (
    <div>
      <div>
        <h2>Working.. 🔥</h2>
        <TodoContainer todos={props.todos} />
      </div>
      <div>
        <h2>Done..! 🎉</h2>
        <TodoContainer todos={props.todos}  />
      </div>
    </div>
  );
};

export default ToDoList;
