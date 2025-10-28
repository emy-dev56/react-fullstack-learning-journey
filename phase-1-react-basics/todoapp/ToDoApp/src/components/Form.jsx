import { useState } from "react";
import style from "./Form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className={style.form}>
      <input
        className={style.input}
        type="text"
        placeholder="Enter a task"
        value={todo.name}
        onChange={(e) => setTodo({ ...todo, name: e.target.value })}
      />
      <button type="submit" className={style.button}>
        Add
      </button>
    </form>
  );
}
