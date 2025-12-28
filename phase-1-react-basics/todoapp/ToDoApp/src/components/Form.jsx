import { useState } from 'react';
import style from './Form.module.css';

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: '', done: false });
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name: '', done: false });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={style.todoform}>
        <div className={style.container}>
          <input type="text" placeholder="Add a task" value={todo.name} onChange={(e) => setTodo({name:e.target.value, done:false})} className={style.modernInput} />
          <button type="submit" className={style.modernButton}>
            Add
          </button>
        </div>
      </form>
    </>
  );
}
