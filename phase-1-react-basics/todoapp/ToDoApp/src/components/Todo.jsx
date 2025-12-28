import React, { useState } from 'react';
import Form from './Form';
import TodosList from './TodosList';
import Footer from './Footer';

export default function Todo() {
  const[todos, setTodos] = useState([]);  
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <TodosList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </>
  )
}
