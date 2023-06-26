import { useState } from "react";
import Header from "../home/Header";
import ToDoList from "../home/ToDoList";

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };
  return (
    <div>
      <Header onAddTodo={handleAddTodo} />
      <ToDoList />
    </div>
  );
};

export default HomePage;
