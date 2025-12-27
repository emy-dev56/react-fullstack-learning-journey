import React, { useState } from 'react';
import TodoItem from './TodoItem';

export default function Todo() {
  const[todo, setTodo] = useState("");
  const[todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add a task" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button type="submit">Add</button>
    </form>
    {
      todos.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))
    }
    </>
  )
}
