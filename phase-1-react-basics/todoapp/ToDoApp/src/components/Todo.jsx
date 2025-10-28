import { useState } from "react";
import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
import Footer from "./Footer.jsx";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const totalComplete = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer totalCompleted={totalComplete} totalTodos={totalTodos} />
    </>
  );
}
