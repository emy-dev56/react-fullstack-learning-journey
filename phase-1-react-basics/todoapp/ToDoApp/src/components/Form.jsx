import { useState } from "react";
import style from "./Form.module.css";

export default function Form({todos, setTodos}) {
  const[todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={style.todoform}>
        <div className={style.container}>
          <input type="text" placeholder="Add a task" value={todo} onChange={(e) => setTodo(e.target.value)} className={style.modernInput}/>
          <button type="submit" className={style.modernButton}>Add</button>
        </div>
      </form>
    </>
  );
}
